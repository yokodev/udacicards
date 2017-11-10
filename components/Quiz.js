import React from 'react'
import TextButton from './TextButton'
import { Text, View, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
// import TextButton from './TextButton'
import
  // defaultPrimaryColor, lightPrimaryColor,
  // textPrimaryColor, accentColor, primaryTextColor,
  // secondaryTextColor, dividerColor, darkPrimaryColor
   * as MyColors  from '../utils/colors'

class Quiz extends React.Component {

  render(){

    return(
      <View>
        <Text>{'Does React Native work with Android?'}</Text>
      </View>
    )
  }
}


const QuestionText = styled.Text`
  background-color: MyColors.defaultPrimaryColor
`;

// const mnTbtn = styled.TextButton``;


export default Quiz
