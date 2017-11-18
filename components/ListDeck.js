import React from 'react'
import {
  View, Text, StyleSheet,
  FlatList, DeviceEventEmitter, ActivityIndicator } from 'react-native'
import Reactotron from 'reactotron-react-native'
import TextButton from './TextButton'
import { List, ListItem } from 'react-native-elements'
import {
  defaultPrimaryColor, dividerColor,
  textPrimaryColor, primaryTextColor
} from '../utils/colors'
import { connect } from 'react-redux'
import { getDeckItem } from '../actions'

class ListDeck extends React.Component {

  setInitialData = () => {
    persistData().then(data => Reactotron.log(data))
  }

  goToDeckItem = ({ item })=>{
    this.props.dispatch(getDeckItem({deckItem:item}))
    this.props.navigation.navigate('Deck', { item })
  }

  render() {
    //  console.log('thisProps en LIST ',this.props)
    const { deckList } = this.props
    // console.log('deckList ',deckList)
    const isEmpty = Object.keys(deckList).length <1 ? true : false
    let listToRender = <ActivityIndicator size={'large'}/>
    if (!isEmpty) {
      const list = Object.values(deckList)
      // console.log('LISTA ',list)
      listToRender = (
        <FlatList
          data={list}
          renderItem={({ item }) => {
            const questions = item.questions ? item.questions.length : 0
            return (
              <ListItem
                title={item.title}
                badge={{ value: questions, textStyle: { color: 'orange' } }}
                onPress={()=>this.goToDeckItem({item})}
              />
            )
          }}
          keyExtractor={item => item.title}
        />
      )
    }

    return (
      <View style={{ flex: 1 }}>
        <List>{listToRender}</List>
      </View>
    )
  }
}

function mapStateToProps({deckList}){
  return{
    deckList
  }
}
export default connect(mapStateToProps)(ListDeck)
