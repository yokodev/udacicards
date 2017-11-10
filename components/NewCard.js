import React from 'react'
import TextButton from './TextButton'
import { Text, View, StyleSheet, TextInput } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import styled from 'styled-components/native'
import
  // defaultPrimaryColor, lightPrimaryColor,
  // textPrimaryColor, accentColor, primaryTextColor,
  // secondaryTextColor, dividerColor, darkPrimaryColor
   * as MyColors
  from '../utils/colors'
import { addCardToDeck } from '../storage'

class NewCard extends React.Component {

  state={
    question:'',
    answer:'',
  }

  saveNewCard = ()=>{
    const {question, answer }= this.state
    const card = {question:question,answer:answer}
    // alert(JSON.stringify(this.state))
    console.log('LOGGER',this.props);
    // addCardToDeck()
  }

  render(){

    return(
      <View>
        <TextInput
          placeholder="Question"
          onChangeText={(text)=>this.setState({question:text})}
         />
         <TextInput
           placeholder="Answer"
           onChangeText={(text)=>this.setState({answer:text})}
          />
        <TextButton onPress={this.saveNewCard}>Submit</TextButton>
      </View>
    )
  }
}


const QuestionText = styled.Text`
  background-color: MyColors.defaultPrimaryColor
`;

// const mnTbtn = styled.TextButton``;


export default NewCard
