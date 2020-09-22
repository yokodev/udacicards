import * as React from 'react';
import { View, Text, Button, Image,ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer'
import { TextInput } from 'react-native-gesture-handler';






import { Decks, Tabs } from './src/components/AppNavigator';
import { Provider } from 'react-redux'
//import store from './store'
import { PersistGate } from 'redux-persist/es/integration/react'
import configureStore  from './store'




function DetailsScreen({navigation, route,initialParams}) {
let itemId=0, otherParams=''

  initialParams && ({itemId} =initialParams) 
  route.params && ({itemId, otherParams } = route.params)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>ItemID: {JSON.stringify(itemId)}</Text>
      <Text>OtherParams: {otherParams}</Text>
      <Text>Details Screen</Text>
      <Button title={'Go to Details... Again'} 
        onPress={()=>navigation.push('Details')}  />
      <Button title={'Go Home'} 
        onPress={()=>navigation.navigate('Home')}  />
      <Button title={'Go Back'} 
        onPress={()=>navigation.goBack()}  />
      <Button title={'Go back to first screen in Stack'} 
        onPress={()=>navigation.popToTop()}  />

    </View>
  );
}


function HomeScreen({ navigation }) {
  const [count, setCount ] = React.useState(0)
  React.useLayoutEffect(()=>{
    navigation.setOptions({
      headerRight: ()=>(
        <Button onPress={()=>setCount(c=>c+1)} title="Update Count" />
      )
    })
  })
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>count: {count}</Text>
    </View>
  );
}

function CreatePostScreen({navigation}){
  const [postText, setPostText] = React.useState('')
  return(
    <>
      <TextInput
        multiline
        placeholder="What's on your mind"
        style={{height:200,padding:10, backgroundColor:'white'}}
        value={postText}
        onChangeText={setPostText}
      />
      <Button 
        title="Done"
        onPress={ ()=>{
          //pass params back to home screen
          navigation.navigate('Home', {post:postText})
        }}
      />
    </>
  )
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile Screen</Text>
      <Button title="Go Back" onPress={()=>navigation.goBack()} />
      <Button title="Update Title" 
        onPress={()=>navigation.setOptions({title: 'Actualizado Jesus es Rey'})} />
    </View>
  )
}
function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={{ uri: 'https://reactjs.org/logo-og.png'}}
    />
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Settings Screen</Text>
    </View>
  )
}

function Root(){
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ProfileScreen}/>
      <Stack.Screen name="Settings" component={Settings}/>
    </Stack.Navigator>
  )
}
const Stack = createStackNavigator();
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
