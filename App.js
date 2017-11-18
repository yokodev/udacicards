import React from 'react';
import { StyleSheet, Text, View, Platform, StatusBar, ActivityIndicator } from 'react-native'
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
import { PersistGate } from 'redux-persist/es/integration/react'

// const store = configureStore()
const { persistor, store } = configureStore()

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
        <PersistGate
          loading={<ActivityIndicator size={'large'}/>}
          persistor={persistor}>
          <View style={{ flex: 1 }}>
            <MyStatusBar />
            <Stack />
          </View>
        </PersistGate>
      </Provider>
    )
  }
}
