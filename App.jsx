import * as React from 'react';
//import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'

import { Decks } from './src/components/AppNavigator';
import { Provider } from 'react-redux'
import configureStore  from './src/app/store.js'


const Drawer = createDrawerNavigator();

const { store } = configureStore()

function App() {
  return (
    <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Decks" component={Decks} />
            {/*<Drawer.Screen name="Root" component={Root} />*/}
          </Drawer.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

export default App;
