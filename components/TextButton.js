import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { accentColor, textPrimaryColor } from '../utils/colors'


const TextButton = ({onPress, children, txtStyle={},btnStyle={}})=>
  <TouchableOpacity style={[styles.btn, btnStyle]} onPress={onPress}>
    <Text style={[styles.text, txtStyle]}>{children}</Text>
  </TouchableOpacity>


  const styles = StyleSheet.create({
    text:{
      textAlign:'center',
      color:textPrimaryColor,
      margin:20
    },
    btn:{
      backgroundColor: accentColor,
      justifyContent: 'center'
    }
  })

export default TextButton
