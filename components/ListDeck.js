import React from 'react'
import {
  View, Text, StyleSheet,
  FlatList, DeviceEventEmitter } from 'react-native'
import Reactotron from 'reactotron-react-native'
import { persistData, getDecks } from '../storage'
import TextButton from './TextButton'
import { List, ListItem } from 'react-native-elements'
import {
  defaultPrimaryColor, dividerColor,
  textPrimaryColor, primaryTextColor
} from '../utils/colors'
import { connect } from 'react-redux'
import { getAllDecks } from '../actions'

class ListDeck extends React.Component {
  state = {
    deckList: []
  }

  componentDidMount() {
    DeviceEventEmitter
      .addListener('refreshList', (e)=>{this.getDeckList()})
    this.getDeckList()
  }

  setInitialData = () => {
    persistData().then(data => Reactotron.log(data))
  }

  getDeckList = () => {
    this.props.dispatch(getAllDecks())
  }

  render() {
    // console.log('thisProps en LIST ',this.props)
    // const { deckList } = this.state
    const { deckList } = this.props
    let listToRender = null
    if (deckList !== undefined) {
      const list = Object.values(deckList)
      // console.log(list)
      listToRender = (
        <FlatList
          data={list}
          renderItem={({ item }) => {
            const questions = item.questions ? item.questions.length : 0
            return (
              <ListItem
                title={item.title}
                badge={{ value: questions, textStyle: { color: 'orange' } }}
                onPress={() => this.props.navigation.navigate('Deck', { item })}
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
