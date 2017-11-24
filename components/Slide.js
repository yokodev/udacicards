import React from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'
import * as MyColors from '../utils/colors'
import { Button } from 'react-native-elements'
import Intro from './Intro'

const SCREEN_WIDTH = Dimensions.get('window').width

class Slide extends React.Component {
  start = ()=>{
    this.props.startDeckList()
  }
  renderSlides = () =>
    this.props.data.map((slide, i) => (
      <View style={[styles.slideItem, { backgroundColor: slide.color }]} key={i}>
        <Text style={[styles.slideText, {fontSize:40}]}>{slide.textHeader}</Text>
        {i===0 && <Intro/> }
        {slide.text &&<Text
          style={[styles.slideText,
            i===0 && {marginTop:20}]}>{slide.text}</Text>}
        {i===1 && <View style={styles.btnContainer}>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'fiber-new' }}
            title="Start Learning..."
            backgroundColor={MyColors.accentColor}
            onPress={this.start}
          />
        </View> }
      </View>
    ))

  render() {
    return (
      <ScrollView horizontal style={{ flex: 1 }} pagingEnabled scrollEnabled>
        {this.renderSlides()}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({

  slideItem: {
    justifyContent: 'center',
    alignItems:'center',
    width: SCREEN_WIDTH - 20,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 5
  },
  slideText: {
    fontSize: 25,
    color: MyColors.textPrimaryColor,
    textAlign: 'center',
  },
  btnContainer: {
    justifyContent: 'center',
    width:SCREEN_WIDTH - 25 ,
    backgroundColor:'white',
    height:70,
    marginLeft:18,
    marginRight:18,
    marginTop:20,
    borderRadius:7,
  }
})

export default Slide
