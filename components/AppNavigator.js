import React from 'react'
import { StackNavigator , TabNavigator } from 'react-navigation'
import { Platform } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { darkPrimaryColor,defaultPrimaryColor, textPrimaryColor} from '../utils/colors'
import DeckItem from './DeckItem'
import ListDeck from './ListDeck'
import NewDeck from './NewDeck'
import Quiz from './Quiz'
import NewCard from './NewCard'

const Tabs = TabNavigator({
  ListDeck: {
    screen: ListDeck,
    navigationOptions:{
      tabBarLabel:'List Deck',
      tabBarIcon: ({tintColor})=><Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
    }
  },
  AddDeck: {
    screen: NewDeck,
    navigationOptions:{
      tabBarLabel:'New Deck',
      tabBarIcon: ({tintColor})=><FontAwesome name='plus-square' size={30} color={tintColor}/>
    }
  }
},{
  navigationOptions:{
    header:null
  },
  tabBarOptions:{
    activeTintColor: Platform.OS === 'ios' ? "purple": textPrimaryColor,
    style:{
      height:56,
      backgroundColor:Platform.OS === 'ios' ? "white": darkPrimaryColor,
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

const Stack = StackNavigator({
  Main: {
    screen: Tabs
  },
  Deck:{
    screen: DeckItem,
    navigationOptions:{
      title:'Ucacicards',
    }
  },
  NewCard:{
    screen: NewCard,
    navigationOptions:{
      title:'Add a Card',
    }

  },
  Quiz:{
    screen: Quiz,
    navigationOptions:{
      title:'Quiz',
    }

  }
})

export default Stack
