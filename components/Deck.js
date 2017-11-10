import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { saveDeckTitle, getDecks } from '../storage'
import TextButton from './TextButton'
import { defaultPrimaryColor, dividerColor,
  textPrimaryColor, secondaryTextColor } from '../utils/colors'

class Deck extends React.Component {
  addCard = ()=>{
    // alert( JSON.stringify(this.props))
    this.props.navigation.navigate('NewCard')
  }
  startQuiz = ()=>{
    // alert( 'startQuiz',this.props)
    this.props.navigation.navigate('Quiz')
  }

  render(){
    const { questions, title }= this.props.navigation.state.params.item

    return(
      <View>
        <Text style={styles.mainHeader}>{title}</Text>
        <Text style={styles.subHeader}>{`${questions? questions.length:0} Cards`}</Text>
        <TextButton btnStyle={[styles.btn,
          { backgroundColor:'white',
            borderColor: 'black',
            marginBottom: 5
          }]} txtStyle={{color:'black'}} onPress={this.addCard}>Add Card</TextButton>
        {/* <View style={{borderBottomWidth:10,borderBottomColor:dividerColor}}></View> */}
        <TextButton btnStyle={styles.btn} onPress={this.startQuiz}>Start Quiz</TextButton>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainHeader:{
    fontSize:30,
    color:textPrimaryColor,
    // flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  subHeader:{
    fontSize:18,
    color:secondaryTextColor,
    // flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  btn:{
    // width:200,
    borderRadius: 25,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  }

})


export default Deck
