import React from 'react'
import {
  View, Text, StyleSheet, TextInput } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import * as Colors from '../utils/colors'
import {
  defaultPrimaryColor, dividerColor,
  textPrimaryColor, primaryTextColor } from '../utils/colors'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'
import { FormLabel, FormInput } from 'react-native-elements'
import { saveDeckTitle, getDecks, removeThis,persistData } from '../storage'

class NewDeck extends React.Component {

  state={
    deckTitle:''
  }
  ssaveTitle = ()=>{
      removeThis('LLAVE01').then(
      data=>{
        console.log('REMOVEladata', data)
        persistData()
        .then(
          persitedDATA=>console.log('persistida: ',persitedDATA)
        )}
    )
  }

  saveTitle = ()=>{
    const { deckTitle } = this.state
    saveDeckTitle(deckTitle)
    .then(data=>{
      console.log('enretorno ',data)
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Main'}),
        ]
      })
      this.props.navigation.dispatch(resetAction)
    })
  }

  render() {
    return (
      <View>

        <Text style={styles.txtHeader}>What is the title of your new Deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={(text)=>this.setState({deckTitle:text})}
         />
        <TextButton onPress={this.saveTitle} >Submit</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtHeader:{
    fontSize:30
  }
})
export default NewDeck
