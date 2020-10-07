import React from 'react';
import {View, Text, Button, Image, ActivityIndicator} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as MyColors from '../utils/colors';
/*
import DeckItem from './DeckItem';
import ListDeck from './ListDeck';
import NewDeck from './NewDeck';
import Quiz from './Quiz';
import NewCard from './NewCard';
*/
import AddDeck from '../features/decks/AddDeck.jsx'
import DeckList from '../features/decks/DeckList.jsx';

function ProfileScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
      <Button
        title="Update Title"
        onPress={() => navigation.setOptions({title: 'Actualizado Jesus es Rey'})}
      />
    </View>
  );
}


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export function Decks() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Main" component={Tabs} />
      {/*<Stack.Screen name="Deck" component={DeckItem} />*/}
      {/*<Stack.Screen name="NewCard" component={NewCard} />*/}
      {/*<Stack.Screen name="Quiz" component={Quiz} />*/}
    </Stack.Navigator>
  );
}

export function Tabs() {
  return (
    <Tab.Navigator {...tabOptions}>
      <Tab.Screen name="ListDeck" component={DeckList} options={listDeckTabOptions} />
      <Tab.Screen name="AddDeck" component={AddDeck} options={newDeckTabOptions} />
    </Tab.Navigator>
  );
}

const listDeckTabOptions = {
  tabBarLabel: 'List Deck',
  tabBarIcon: ({tintColor}) => <Ionicons name="ios-bookmarks" size={30} color={tintColor} />,
};

const newDeckTabOptions = {
  tabBarLabel: 'New Deck',
  tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />,
};

const tabOptions = {
  tabBarOptions: {
    labelStyle: {
      fontSize: 17,
      color: MyColors.textPrimaryColor,
    },
    //activeTintColor: Platform.OS === 'ios' ? 'purple' : MyColors.textPrimaryColor,
    activeTintColor: MyColors.textPrimaryColor,
    indicatorStyle: {backgroundColor: MyColors.textPrimaryColor},
    style: {
      height: 56,
      //backgroundColor: Platform.OS === 'ios' ? 'white' : MyColors.defaultPrimaryColor,
      backgroundColor: MyColors.defaultPrimaryColor,
      shadowColor: 'rgba(0,0,0,0.24)',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowRadius: 6,
      shadowOpacity: 1,
    },
  },
};
