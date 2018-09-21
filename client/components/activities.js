import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, Platform, FlatList } from 'react-native'
import { MapView, Constants, Location, Permissions } from 'expo'
import { Marker } from 'react-native-maps'
import { connect, Provider } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'
import { getActivities } from '../store/activitiesTrainings'

export default class ActivitiesTrainings extends Component {
  render () {
    return (
      <View>
        <Text>The first thing a dog needs to learn is the basic discipline and respect that is totally defined by the energy and basic directions the owner gives to his dog.</Text>
        <Text>Keep in mind, the following commands, if appropriately applied by the owner can be very fun for the dog and the owner too as well as will totally make both lives easier and lot more enjoyable.</Text>
        <Text>Remember to:</Text>
        <FlatList
          data={[
            {key: 'Be patient and regular'},
            {key: 'Do not push your pooch too hard at the start'},
            {key: 'Find a quiet place for the exercises to avoid distractions'},
            {key: 'Make learning lessions short and simple'},
            {key: 'Make training exercises consistent and a regular thing'},
            {key: 'Never punish your dog'},
            {key: 'Practice at home or garden first before exercising commangs publicly'},
            {key: 'Reward good behavior with some yummy treats'},
            {key: 'Show your pup what you want them to know. Using force will not help'},
            {key: 'Teach your pooch new commands as soon as he properly learns an old one'},
            {key: 'Make training fun and entertaining!'},
            {key: 'Involve yourself in training exercises, not just your pup. They need a friend to play with.'}
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>} />
      </View>
      // <MapView
      //   style={{ flex: 1 }}
      //   initialRegion={{
      //     latitude: 38,
      //     longitude:,
      //     latitudeDelta:,
      //     longtitudeDelta:
      //   }}
      // />
    )
  }
}

const styles = StyleSheet.create({
  containg: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 15,
    height: 44
  }
})
