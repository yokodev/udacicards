import React, { Component } from 'react'
import { Modal, Text, StyleSheet, View } from 'react-native'
import TextButton from './TextButton'

class MyModal extends Component {
  render() {
    const { modalState, showModal } = this.props
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
              <Text>Hello World!</Text>

              <TextButton
                onPress={() => {
                  this.props.showModal(!modalState)
                }}
              >
                Hide Modal
              </TextButton>
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
})

export default MyModal
