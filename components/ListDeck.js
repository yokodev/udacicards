import React from 'react'
import {
  View, Text, StyleSheet,
  FlatList, DeviceEventEmitter, ActivityIndicator } from 'react-native'
import Reactotron from 'reactotron-react-native'
import TextButton from './TextButton'
import { List, ListItem } from 'react-native-elements'
import  * as MyColors from '../utils/colors'
import { connect } from 'react-redux'
import { getDeckItem } from '../actions'
import MyIModal from './components/InitModal'

class ListDeck extends React.Component {
  state = {
    showModal: true
  }

  setInitialData = () => {
    persistData().then(data => Reactotron.log(data))
  }

  goToDeckItem = ({ item })=>{
    this.props.dispatch(getDeckItem({deckItem:item}))
    this.props.navigation.navigate('Deck', { item })
  }

  toggleModal = () => {
    const { showModal } = this.state
    this.setState({showModal:false})
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
                containerStyle={
                  {
                    borderBottomColor:MyColors.dividerColor
                  }}
                titleStyle={{color:MyColors.primaryTextColor}}
                chevronColor={MyColors.secondaryTextColor}
                title={item.title}
                badge={
                  { value: questions,
                    textStyle: {color: MyColors.textPrimaryColor },
                    containerStyle:{ backgroundColor: MyColors.accentColor}
                  }
                }
                onPress={()=>this.goToDeckItem({item})}
              />
            )
          }}
          keyExtractor={item => item.title}
        />
      )
    }

    return (
      <View style={{ flex: 1, backgroundColor:MyColors.textPrimaryColor }}>
        <List>{listToRender}</List>
        {this.state.showModal && (
          <MyIModal
            modalState={this.state.showModal}
            toggleModal={this.toggleModal}
            {...{ correctAnswers, incorrectAnswers, totalQuestions }}
          />
        )}
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
