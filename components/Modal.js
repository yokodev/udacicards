import React, { Component } from 'react'
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { Button } from 'react-native-elements'
import * as MyColors from '../utils/colors'

class MyModal extends Component {

  takeDecision = (decision)=>{
    const { showModal, modalState, execDecision } = this.props
    showModal(!modalState)
    execDecision({ decision: decision })
  }

  // returnToDeckItem = () => {
  //   const { showModal, modalState, execDecision } = this.props
  //   showModal(!modalState)
  //   execDecision({ decision: 'Deck' })
  // }
  // resetTest = () => {
  //   const { showModal, modalState, execDecision } = this.props
  //   showModal(!modalState)
  //   execDecision({ decision: 'reset' })
  // }
  // gotoDeckList = () => {
  //   this.props.navigation.navigate('ListDeck')
  // }

  render() {
    const { modalState, showModal, correctAnswers, incorrectAnswers, totalQuestions } = this.props

    return (
      <Modal
        animationType="slide"
        transparent
        visible={modalState}
        onRequestClose={() => {
          console.log('done')
        }}
      >
        <View style={styles.modal}>
          <View style={styles.container}>
            <View style={styles.resultsContainer}>
              <Text style={styles.resultText}>
                {correctAnswers} good answer/s out of {totalQuestions}
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'loop' }}
                title="ReTry"
                onPress={()=>this.takeDecision('reset')}
                buttonStyle={styles.btn}
              />
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'assignment-turned-in' }}
                title="Back to Deck"
                backgroundColor={MyColors.accentColor}
                onPress={() =>this.takeDecision('Deck')}
                buttonStyle={styles.btn}
              />
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'home' }}
                title="Decks"
                backgroundColor={MyColors.accentColor}
                onPress={() =>this.takeDecision('ListDeck')}
                buttonStyle={styles.btn}
              />
            </View>
          </View>
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  btn: {
    // flex: -1
    // marginLeft:0,
    // marginRight:0,
  },
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    marginTop: 22
  },
  container: {
    // flex:0,
    backgroundColor: 'white',
    // justifyContent:'center',
    // alignItems:'center',
    margin: 25,
    borderRadius: 5,
    borderWidth: 0.5
  },
  btnContainer: {
    width:'100%',
    flexDirection: 'row',
    justifyContent:'space-around',
     marginBottom:25,
  },
  resultsContainer: {
    height: 75,
    marginTop: 40,
    alignItems:'center',
    // borderRadius: 25,
    // borderWidth: 0.5,
    backgroundColor:'white'

  },
  resultText: {
    fontSize: 26,
    fontWeight: 'bold',

  }
})

export default MyModal
