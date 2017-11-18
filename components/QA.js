import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const QA = ({ question='Defaultquestion', answer='Defaultanswer',
              qOa }) => (
  <View>
    {
      qOa
      ?(
        <View style={styles.questionContainer}>
          <Text style={styles.txt}>{question}</Text>
        </View>
      )
      :(
        <View style={styles.answerContainer}>
          <Text style={styles.txt}>{answer}</Text>
        </View>
      )
    }
  </View>
)

export default QA

const styles = StyleSheet.create({
  txt: {
    fontSize: 20,
    color: 'black'
  },
  questionContainer: {
    marginTop: 50,
    height: 100
  },
  answerContainer: {
    marginTop: 50,
    height: 100
  },
  btnContainer: {
    height: 150,
    alignItems: 'center'
  }
})
