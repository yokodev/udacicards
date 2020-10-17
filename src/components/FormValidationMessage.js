import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import * as MyColors from '../utils/colors'

const FormValidationMessage = ({validationText, txtColor}) =>
  <View style={styles.container}>
    <Text style={[styles.txt, {color: txtColor ? txtColor : MyColors.lightPrimaryColor}]}>
      {validationText}
    </Text>
  </View>


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 30,
    justifyContent: 'center',
  },
  txt: {
    color: MyColors.lightPrimaryColor,
    alignItems: 'center',
    textAlign: 'center'
  }
})

export default FormValidationMessage
