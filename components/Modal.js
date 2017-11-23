import React, { Component } from 'react'
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { Button } from 'react-native-elements'
import  * as MyColors from '../utils/colors'

class MyModal extends Component {
  returnToDeckList = ()=>{
    const { showModal, modalState, execDecision } = this.props
    showModal(!modalState)
    execDecision({decision:'Deck'})
  }
  resetTest = ()=>{
    const { showModal, modalState, execDecision } = this.props
    showModal(!modalState)
    execDecision({decision:'reset'})

  }

  render() {
    const { modalState, showModal, correctAnswers,
             incorrectAnswers, totalQuestions } = this.props

    return (
        <Modal
          animationType="slide"
          transparent
          visible={modalState}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}
        >
          <View style={styles.modal}>
            <View style={ styles.container }>

          <View style={styles.resultsContainer}>
              <Text style={styles.resultText}>
              {correctAnswers} good answer/s out of {totalQuestions}</Text>
          </View>
            <View style={styles.btnContainer}>
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'loop' }}
                title='ReTry Test '
                // backgroundColor={'green'}
                onPress={this.resetTest}
                buttonStyle={[styles.btn, { marginBottom: 5 }]}
              />
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'assignment-turned-in' }}
                title='Go back to Deck Item'
                backgroundColor={MyColors.accentColor}
                onPress={() => {
                    this.returnToDeckList()
                  }}
                buttonStyle={[styles.btn, { marginBottom: 5 }]}
              />
            </View>
            </View>
          </View>
        </Modal>
    )
  }
}

const styles = StyleSheet.create({
    modal:{
      flex:1,
      backgroundColor:'rgba(0,0,0,0.7)',
      marginTop: 22,
    },
    container:{
        // flex:1,
        // flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        margin:15,
        borderRadius: 25,
        borderWidth: 0.5,
     },
     btnContainer:{
      //  height:200,
       flexDirection:'row',
       marginBottom:10

     },
     resultsContainer:{
       height:100,
       marginTop:40
     }
     ,resultText:{
       fontSize:30,
       fontWeight:'bold',
     }
})

export default MyModal
