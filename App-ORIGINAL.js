//import 'react-native-gesture-handler'; // this is for the navigation to work correctly according to https://reactnavigation.org/docs/getting-started
import React from 'react';
import {
  //  SafeAreaView,
  //  StyleSheet,
  //  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

//import Stack from './components/AppNavigator';
//import * as Constants from 'expo-file-system';
//TODO I need a Constants file

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
//const Staik = createStackNavigator();
//
//const App = () => {
//  return (
//    <>
//      <NavigationContainer>
//        <Staik.Navigator>
//          <Staik.Screen name="Home" component={HomeScreen} />
//        </Staik.Navigator>
//      </NavigationContainer>
//      ;
//    </>
//  );
//};
//
export default App;
