import React from 'react';
import { StyleSheet, Text, View, Platform,StatusBar } from 'react-native'
import { TabNavigator } from 'react-navigation'
import NewDeck from './components/NewDeck'
import ListDeck from './components/ListDeck'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import './ReactotronConfig'
import { darkPrimaryColor,defaultPrimaryColor, textPrimaryColor} from './utils/colors'
import { Provider } from 'react-redux'
import configureStore  from './store'
import { Constants } from 'expo'
import Stack from './components/AppNavigator'

const store = configureStore()

function MyStatusBar({backgroundColor, ...props}){
  return(
    <View style={{backgroundColor, height:Constants.statusBarHeight}}>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1}}>
          <MyStatusBar />
            <Stack />
        </View>
      </Provider>
    )
  }
}
