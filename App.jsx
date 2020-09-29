import * as React from 'react';
import { ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TextInput } from 'react-native-gesture-handler';



import { Decks } from './src/components/AppNavigator';
import { Provider } from 'react-redux'
//import store from './store'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore  from './store'


const Drawer = createDrawerNavigator();

const { persistor, store } = configureStore()

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={<ActivityIndicator size={'large'}/>}
          persistor={persistor} >
        <NavigationContainer>
          <Drawer.Navigator>
            <Drawer.Screen name="Decks" component={Decks} />
            {/*<Drawer.Screen name="Root" component={Root} />*/}
          </Drawer.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

export default App;
