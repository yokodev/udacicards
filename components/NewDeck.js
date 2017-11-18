import React from 'react'
import { View, Text, StyleSheet, TextInput, DeviceEventEmitter } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { defaultPrimaryColor, dividerColor, textPrimaryColor, primaryTextColor } from '../utils/colors'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'
import { FormLabel, FormInput } from 'react-native-elements'
import { saveDeckTitle,  persistData } from '../storage'
import { getAllDecks, addDeckItem } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends React.Component {
  state = {
    title: ''
  }

  //this is only for reseting purposes
  SsaveTitle = () => {
    persistData().then(data => {
      console.log('persistida: ', data)
      this.props.navigation.goBack()
    })
  }

  saveTitle = () => {
    const {title} = this.state
    this.props.dispatch(addDeckItem({title}))
    this.props.navigation.goBack()
    this.textInput.clear()
  }

  SsaveTitle = () => {
    saveDeckTitle(this.state.title).then(() => {
      this.props.dispatch(getAllDecks())
      this.props.navigation.goBack()
      this.textInput.clear()
    })
  }

  render() {
    // console.log('render newDeck ',this.props);
    return (
      <View>
        <Text style={styles.txtHeader}>What is the title of your new Deck?</Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={text => this.setState({ title: text })}
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

export default connect()(NewDeck)
