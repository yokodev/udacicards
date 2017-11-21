import React, { Component } from 'react'
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import TextButton from './TextButton'
import { Button } from 'react-native-elements'

class MyModal extends Component {
  returnToDeckList = ()=>{
    const { showModal, modalState, execDecision } = this.props
    showModal(!modalState)
    execDecision({decision:'ListDeck'})
  }
  resetTest = ()=>{
    const { showModal, modalState, execDecision } = this.props
    showModal(!modalState)
    execDecision({decision:'reset'})
    
  }
  
  render() {
    const { modalState, showModal, correctAnswers,
             incorrectAnswers, totalQuestions } = this.props
    // console.log('dddddddotalQuestions ',this.props)
    // console.log('navigtation: ',this.props)


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
                icon={{ name: 'done' }}
                title='ReTry Test '
                // backgroundColor={'green'}
                onPress={this.resetTest}
                buttonStyle={[styles.btn, { marginBottom: 5 }]}
              />
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'done' }}
                title='Go back to DeckList'
                // backgroundColor={'green'}
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
      backgroundColor:'rgba(0,0,0,0.5)',
      marginTop: 22, 
    },
    container:{
        // flex:1,
        // flexDirection:'row',
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
        margin:15
     },
     btnContainer:{
      //  height:200,
       flexDirection:'row'

     },
     resultsContainer:{
      //  flex:1,
       height:100
     }
     ,resultText:{
       fontSize:20,
       fontWeight:'bold',
     }
})

export default MyModal
