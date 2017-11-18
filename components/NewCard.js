import React from 'react'
import TextButton from './TextButton'
import { Text, View, StyleSheet, TextInput } from 'react-native'
// import { FontAwesome, Ionicons } from '@expo/vector-icons'
// import styled from 'styled-components/native'
// import * as MyColors from '../utils/colors'
// import { addCardToDeck } from '../storage'
// import { NavigationActions } from 'react-navigation'
import { addNewCard } from '../actions'
import { connect } from 'react-redux'

class NewCard extends React.Component {

  componentDidMount(){
    console.log('this.props en CDM', this.props);
  }

  state = {
    question: '',
    answer: ''
  }

  saveNewCard = () => {
    const { question, answer } = this.state
    const { item:{ title } }= this.props.navigation.state.params
    const card = { question: question, answer: answer }
    this.props.dispatch( addNewCard({ card, title }) )
    this.props.navigation.goBack()    
  }

  render() {
    // console.log('props en NewCard ',this.props);
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

// const QuestionText = styled.Text`
//   background-color: MyColors.defaultPrimaryColor;
// `


export default connect()(NewCard)
