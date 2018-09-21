// look at app.js to maybe create a navagitor
import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect, Provider } from 'react-redux'
import store from './store'
import { createStore } from 'redux'
import { createStackNavigator } from 'react-navigation'
import { Home, Activities } from './components'

const Nav = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      headerTitle: 'Home'
    }
  }
})

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav />
      </Provider>
    )
  }
}
