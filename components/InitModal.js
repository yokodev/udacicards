import React, { Component } from 'react'
import { Modal, Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import  * as MyColors from '../utils/colors'

class MyIModal extends Component {

  startDeckList = ()=>{
    const { toggleModal  } = this.props
    toggleModal()
  }

  render() {
    const { modalState } = this.props

    return (
        <Modal
          animationType="fade"
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
               You have not added any Decks to the List
             </Text>
          </View>
            <View style={styles.btnContainer}>
              <Button
                Component={TouchableOpacity}
                borderRadius={10}
                icon={{ name: 'pan-tool' }}
                title='Start'
                backgroundColor={MyColors.accentColor}
                onPress={() => {
                    this.startDeckList()
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

export default MyIModal
