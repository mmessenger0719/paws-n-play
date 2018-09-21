import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'
import { createStackNavigator } from 'react-navigation'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  red: {
    color: 'green',
    fontFamily: 'Cochin',
    fontSize: 20
  }
})

export default class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }
  render() {
    let pic = {
      uri: 'https://image.ibb.co/cnUmsK/IMG_8139.jpg'
    }
    const { navigate } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Paws-N-Play</Text>
        <Text style={styles.red}>Please excuse our appearance while we are under construction.</Text>
        <Text style={styles.red}>Have a waggy day!</Text>
        <Image source={pic} style ={{width: 100, height: 100}} />
        <Button
          onPress={() => { Alert.alert('You tapped the button!') }} title="Press Me" />
        <Button
          title="Training Exercises"
          onPress={() => navigate('Activities')} />
      </View>
    )
  }
}
