import React from 'react'
import { View, Text, StyleSheet,
        TextInput, DeviceEventEmitter } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { defaultPrimaryColor, dividerColor,
         textPrimaryColor,primaryTextColor
} from '../utils/colors'
import TextButton from './TextButton'
import { NavigationActions } from 'react-navigation'
import { FormLabel, FormInput } from 'react-native-elements'
import { saveDeckTitle, getDecks, removeThis, persistData } from '../storage'
import { getAllDecks } from '../actions'
import { connect } from 'react-redux'

class NewDeck extends React.Component {

  state = {
    deckTitle: ''
  }
  saveTitle = () => {
    async persistData()
    .then(persitedDATA =>{
      console.log('persistida: ', persitedDATA)

      // try {
      //   const decks = await this.props.dispatch(getAllDecks)
      //   // console.log('res en dispatch getAllDecks',res);
      //   const backAction = NavigationActions.back({ key: 'ListDeck' })
      //   this.props.navigation.dispatch(backAction)
      //
      // } catch (e) {
      //     console.log('error ', e);
      // }

    }
  }

  SsaveTitle = () => {
    const { deckTitle } = this.state
    // const { title }= this.props.navigation.state.params
    // console.log('params en saveTitle ', this.props.navigation.state.params)
    saveDeckTitle(deckTitle).then(data => {
      console.log('enretorno Savedecktitle ', data)
      // const resetAction = NavigationActions.reset({
      //   index: 0,
      //   actions: [NavigationActions.navigate({ routeName: 'Main' })]
      // })
      // this.props.navigation.dispatch(resetAction)
      this.props.dispatch(getAllDecks)
      .then(()=>{
        const backAction = NavigationActions.back({
        key: 'ListDeck'
        })
        this.props.navigation.dispatch(backAction)}
      )
      // DeviceEventEmitter.emit('refreshList')
      // this.setState({ deckTitle: '' })
      // this.props.navigation.goBack()
    })
  }

  render() {
    console.log('props en NewDeck ',this.props);
    return (
      <View>
        <Text style={styles.txtHeader}>
          What is the title of your new Deck?
        </Text>
        <TextInput
          placeholder="Deck Title"
          onChangeText={text => this.setState({ deckTitle: text })}
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
