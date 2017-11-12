import React from 'react'
import TextButton from './TextButton'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import // defaultPrimaryColor, lightPrimaryColor,
// textPrimaryColor, accentColor, primaryTextColor,
// secondaryTextColor, dividerColor, darkPrimaryColor
* as MyColors from '../utils/colors'
import { addCardToDeck } from '../storage'
import { NavigationActions } from 'react-navigation'

class NewCard extends React.Component {
  state = {
    question: '',
    answer: ''
  }

  saveNewCard = () => {
    const { question, answer } = this.state
    const { title }= this.props.navigation.state.params
    const card = { question: question, answer: answer }
    addCardToDeck({ title, card }).then(res => {
      console.log('this is the props ', this.props)
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Deck' })]
      })
      // this.props.navigation.dispatch(resetAction)
    })
  }

  render() {
    console.log('props en NewCard ',this.props);
    return (
      <View>
        <TextInput
          placeholder="Question"
          onChangeText={text => this.setState({ question: text })}
        />
        <TextInput
          placeholder="Answer"
          onChangeText={text => this.setState({ answer: text })}
        />
        <TextButton onPress={this.saveNewCard}>Submit</TextButton>
      </View>
    )
  }
}

const QuestionText = styled.Text`
  background-color: MyColors.defaultPrimaryColor;
`

// const mnTbtn = styled.TextButton``;

export default NewCard
