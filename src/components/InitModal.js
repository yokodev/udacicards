import React, {Component} from 'react'
import {Modal, Text, StyleSheet, View, TouchableOpacity, Dimensions} from 'react-native'
import * as MyColors from '../utils/colors'
import Intro from './Intro'
import Slide from './Slide'

const GREETING_DATA = [
  {textHeader: 'Welcome to Udacicards', text: 'This tool will help you memorize anything!!!', color: MyColors.ccolor01},
  {text: 'To get yourself started just add a new Deck, and as many cards as you need', color: MyColors.defaultPrimaryColor},
]


class MyIModal extends Component {
  startDeckList = () => {
    const {toggleModal} = this.props
    toggleModal()
  }

  render() {
    const {modalState} = this.props

    return (
      <Modal
        animationType="fade"
        transparent
        visible={modalState}
        onRequestClose={() => {
          console.log('Modal has been closed.')
        }}
      >
        <View style={styles.modal}>
          <Slide data={GREETING_DATA} startDeckList={this.startDeckList} />
        </View>
      </Modal>
    )
  }
}

const styles = StyleSheet.create({
  modal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
  }

})

export default MyIModal
