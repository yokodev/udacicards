import React from 'react'
import { View, Text, StyleSheet,TouchableOpacity, Dimensions } from 'react-native'
import { FontAwesome, Ionicons } from '@expo/vector-icons'
import { connect } from 'react-redux'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import * as MyColors from '../utils/colors'
import { getDeckItem, setTotalQuestions } from '../actions'
import ElevatedView from 'react-native-elevated-view'

const SCREEN_WIDTH = Dimensions.get('window').width
const SCREEN_HEIGHT = Dimensions.get('window').height

class DeckItem extends React.Component {

  addCard = ()=>{
    const { item }= this.props.navigation.state.params
    this.props.navigation.navigate('NewCard',{item})
  }

  startQuiz = ()=>{
    // const { item }= this.props.navigation.state.params
    const {deckItem}= this.props
    this.props.dispatch(setTotalQuestions(deckItem.questions.length))
    this.props.navigation.navigate('Quiz',{item:deckItem})
  }

  render(){
    // console.log('en deckItem ', this.props);
    const { questions=[], title='Default Card' }= this.props.deckItem
    return(
      <View style={styles.mainContainer}>
        <ElevatedView style={styles.elevatedContainer} elevation={15} >
        <View style={styles.txtContainer}>
          <Text style={styles.mainHeader}>{title}</Text>
          <Text style={styles.subHeader}>{`${questions? questions.length:0} Cards`}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'add-box' }}
            title="Add Card"
            backgroundColor={MyColors.accentColor}
            onPress={this.addCard}
            buttonStyle={[styles.btn,
              { marginBottom: 5, borderWidth:1, borderColor:'white',
                backgroundColor:'transparent'}]
            }
          />
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'playlist-play' }}
            title="Start Quiz"
            backgroundColor={MyColors.accentColor}
            onPress={this.startQuiz}
            buttonStyle={[styles.btn, { marginBottom: 10 }]}
          />
        </View>
        </ElevatedView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:MyColors.textPrimaryColor
  },
  elevatedContainer:{
    marginTop:70,
    margin:10,
    backgroundColor:MyColors.defaultPrimaryColor,
    height:350,
    borderRadius:5,
    // borderWidth:0.5
  },
  txtContainer:{
    marginTop:50,
    marginBottom:30,
    alignItems:'center',

  },
  mainHeader:{
    fontSize:40,
    color:MyColors.textPrimaryColor,
    justifyContent:'center',
    alignItems:'center',
    textAlign:'center'
  },
  subHeader:{
    fontSize:20,
    marginTop:5,
    color:MyColors.lightPrimaryColor,
    justifyContent:'center',
    alignItems:'center',
  },
  btnContainer: {
    marginTop:25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btn:{
    width:200,
    // borderRadius: 25,
    // borderWidth: 0.5,

  }

})

function mapStateToProps({deckList, deckItem}){
	return{ deckList,deckItem }
}

export default connect(mapStateToProps)(DeckItem)
