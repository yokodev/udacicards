import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity,
   AsyncStorage, Button, TouchableHighlight } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { CARDS_STORAGE_KEY } from '../storage'
import * as Colors from '../utils/colors'
import { defaultPrimaryColor, dividerColor, textPrimaryColor, primaryTextColor} from '../utils/colors'
import TextButton from './TextButton'

class Deck extends React.Component {

  // saveData = (data) =>{
  //   alert("this is the data ",data)
  //   const user = 'Jon Doe'
  //   AsyncStorage.setItem('user',user)
  //     .then(
  //       data=>console.log('data REturned ', data),
  //       error=>console.error(error)
  //   )
  //
  // }

  render() {
    return (
      <View>
        <TextButton>Save to deck</TextButton>
        <View style={{borderBottomColor: dividerColor, borderBottomWidth:3}}/>
        <TextButton>Save to deck</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
export default Deck
