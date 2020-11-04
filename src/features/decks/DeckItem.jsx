/* eslint-disable no-use-before-define */
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import { useDispatch } from 'react-redux'
import * as MyColors from '../../utils/colors'
//  import { /* getDeckItem */ setTotalQuestions } from '../../actions'

const DeckItem = ({ route, navigation }) => {
  const dispatch = useDispatch()

  const gotoDeckList = () => {
    navigation.navigate('ListDeck')
  }

  const addCard = () => {
    const { item } = route.params
    navigation.navigate('NewCard', { item })
  }

  //  startQuiz = () => {
  //    // const { item }= this.props.navigation.state.params
  //    const { deckItem } = this.props
  //    const totalQuestions = deckItem.questions.length
  //    if (totalQuestions > 0) {
  //      dispatch(setTotalQuestions(totalQuestions))
  //      navigation.navigate('Quiz', { item: deckItem })
  //    }
  //  }

  // console.log('en deckItem ', this.props);
  // const {questions = [], title = 'Default Card'} = this.props.deckItem;
  const questions = []
  const title = 'Default Card'
  return (
    <View style={styles.mainContainer}>
      <View style={styles.goHome}>
        <Button
          Component={TouchableOpacity}
          borderRadius={10}
          icon={{ name: 'home' }}
          title="Deck List"
          backgroundColor={MyColors.accentColor}
          onPress={gotoDeckList}
        />
      </View>
      <ElevatedView style={styles.elevatedContainer} elevation={15}>
        <View style={styles.txtContainer}>
          <Text style={styles.mainHeader}>{title}</Text>
          <Text style={styles.subHeader}>{`${questions ? questions.length : 0} Cards`}</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'add-box' }}
            title="Add Card"
            backgroundColor={MyColors.accentColor}
            onPress={addCard}
            buttonStyle={[
              styles.btn,
              {
                marginBottom: 5,
                borderWidth: 1,
                borderColor: 'white',
                backgroundColor: 'transparent',
              },
            ]}
          />
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'playlist-play' }}
            title="Start Quiz"
            backgroundColor={MyColors.accentColor}
            onPress={() => console.log(`Starting dos startQuiz`)}
            buttonStyle={[styles.btn, { marginBottom: 10 }]}
          />
        </View>
      </ElevatedView>
    </View>
  )
}

const styles = StyleSheet.create({
  goHome: {
    marginTop: 5,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    // backgroundColor:MyColors.blue
  },
  mainContainer: {
    flex: 1,
    backgroundColor: MyColors.textPrimaryColor,
  },
  elevatedContainer: {
    marginTop: 65,
    margin: 10,
    backgroundColor: MyColors.defaultPrimaryColor,
    height: 350,
    borderRadius: 5,
    // borderWidth:0.5
  },
  txtContainer: {
    marginTop: 50,
    marginBottom: 30,
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 40,
    color: MyColors.textPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 20,
    marginTop: 5,
    color: MyColors.lightPrimaryColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer: {
    marginTop: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    // borderRadius: 25,
    // borderWidth: 0.5,
  },
})

export default DeckItem
