import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import * as MyColors from '../utils/colors'
const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

const FormValidationMessage = ({validationText, txtColor})=>
  <View style={styles.container}>
    <Text style={[styles.txt,{color:txtColor? txtColor:MyColors.lightPrimaryColor}]}>
      {validationText}
    </Text>
  </View>


const styles = StyleSheet.create({
  container:{
    // width:SCREEN_WIDTH,
    flexDirection:'row',
    height:30,
    justifyContent:'center',
    // alignItems:'center'
  },
  txt:{
    color:MyColors.lightPrimaryColor,
    // fontWeight:'bold',
    alignItems:'center',
    textAlign:'center'
  }
})

export default FormValidationMessage
