import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import TextButton from './TextButton'
import { textPrimaryColor, secondaryTextColor } from '../utils/colors'
import { getDeckItem } from '../actions'

class DeckItem extends React.Component {

  addCard = ()=>{
    const { item }= this.props.navigation.state.params
    this.props.navigation.navigate('NewCard',{item})
  }

  startQuiz = ()=>{
    const { item }= this.props.navigation.state.params
    this.props.navigation.navigate('Quiz',{item})
  }

  render(){
    // console.log('en deckItem ', this.props);
    const { questions=[], title='Default Card' }= this.props.deckItem
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

function mapStateToProps({deckList, deckItem}){
	return{ deckList,deckItem }
}

export default connect(mapStateToProps)(DeckItem)
