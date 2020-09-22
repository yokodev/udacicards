import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'




const Stack = createStackNavigator()
function Login(){
  return(
    <View>
      <Text>I am a login component </Text>
    </View>
  )
}



export const RoutesProps = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='login' component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
