import React from 'react'
import { Text, View, StyleSheet, Image,TouchableOpacity, Animated } from 'react-native'
import * as MyColors from '../utils/colors'
import { Button } from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import myPic from '../utils/pic.jpeg'

class MyImage extends React.Component {

  componentDidMount(){

    const{ opacity, height, width } = this.state

    Animated.timing(opacity, { toValue:1, duration:2000}).start()
    Animated.spring(width, { toValue:300, speed:4 }).start()
    Animated.spring(height, { toValue:300, speed:4 }).start()
  }

  state={
    opacity: new Animated.Value(0),
    width:   new Animated.Value(0),
    height:  new Animated.Value(0),
  }

  render(){
    const { opacity, width, height }= this.state
    return(
      <View style={styles.container}>
        <Animated.Image
          style={[styles.img, {opacity, width, height}]}
          source={myPic}
         />
      </View>
    )
  }
}

export default MyImage

const styles = StyleSheet.create({
  container:{
    width:300,
    height:200,
    flex:0,
    alignItems:'center',
  },
  img:{
    width:150,
    height:150,
    borderRadius:5,
    // opacity:0.5,
  }
})
