import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Deck from './components/Deck'
import ListDeck from './components/ListDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'


const Tabs = TabNavigator({
  ListDeck: {
    screen: ListDeck,
    navigationOptions:{
      tabBarLabel:'List Deck',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  AddDeck: {
    screen: Deck,
    navigationOptions:{
      tabBarLabel:'Add Deck',
      tabBarIcon: ({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor}/>
    }
  }
},{
  navigationOptions:{
    header:null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? "purple": "white",
    style:{
      height:56,
      backgroundColor:Platform.OS === 'ios' ? "white": "purple",
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width:0,
        height:3
      },
      shadowRadius:6,
      shadowOpacity:1
    }
  }

})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
      <View style={{height:20}}/>
        <Tabs />
      </View>
    )
  }
}
