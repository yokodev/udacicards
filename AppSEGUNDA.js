// In App.js in a new project
import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={home}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <View style={home}>
      <Text>Home Screen</Text>
    </View>
  );
}

//ctermfg=15 ctermbg=61 cterm=NONE guifg=#f8f8f2 guibg=#646e96 gui=NONE
//autocmd ColorScheme dracula hi PmenuSel ctermfg=16 ctermbg=84 cterm=bold guifg=#282a36 guibg=#50fa7b

const styles = StyleSheet.create({
  container: {
    color: 'blue',
    ctermfg: '#061',
    guifg: '#f8f8f2',
    guibg: '#44475A',
  },
  home: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;
