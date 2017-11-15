import React from 'react'
import { View, Text, StyleSheet, TextInput, DeviceEventEmitter } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { defaultPrimaryColor, dividerColor, textPrimaryColor, primaryTextColor } from '../utils/colors'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'
import { FormLabel, FormInput } from 'react-native-elements'
import { saveDeckTitle,  persistData } from '../storage'
import { getAllDecks } from '../actions'

class NewDeck extends React.Component {
  state = {
    deckTitle: ''
  }

  //this is only for reseting purposes
  SsaveTitle = () => {
    persistData().then(data => {
      console.log('persistida: ', data)
      this.props.navigation.goBack()
    })
  }

  saveTitle = () => {
    saveDeckTitle(this.state.deckTitle).then(() => {
      this.props.navigation.goBack()
      this.textInput.clear()
    })
  }

  render() {
    console.log('render DeckItem ',this.props);
    return (
      <View>
        <Text style={styles.txtHeader}>What is the title of your new Deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={text => this.setState({ deckTitle: text })}
          ref={input => {
            this.textInput = input
          }}
        />
        <TextButton onPress={this.saveTitle}>Submit</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  txtHeader: {
    fontSize: 30
  }
})

export default NewDeck
