import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import  * as MyColors from '../utils/colors'
const QA = ({ question='', answer='', qOa }) => (
  <View>
    {
      qOa
      ?
        <View style={styles.questionContainer}>
          <Text style={[styles.txt,{ color:MyColors.textPrimaryColor}]}>{question}</Text>
        </View>
      :
        <View style={styles.answerContainer}>
          <Text style={[styles.txt,{ color:MyColors.secondaryTextColor}]}>{answer}</Text>
        </View>
    }
  </View>
)

export default QA

const styles = StyleSheet.create({
  txt: {
    fontSize: 25,
    textAlign:'center'
  },
  questionContainer: {
    alignItems:'center',
    marginTop: 60,
    height: 100
  },
  answerContainer: {
    alignItems:'center',
    marginTop: 60,
    height: 100,
  },
  btnContainer: {
    height: 150,
    alignItems: 'center'
  }
})
