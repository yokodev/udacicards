/* eslint-disable no-use-before-define */
import React, {useEffect} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import { useSelector, useDispatch } from 'react-redux'
import * as MyColors from '../../utils/colors'
//  import { /* getDeckItem */ setTotalQuestions } from '../../actions'


const DeckItem = ({ route, navigation }) => {

  const { title= 'Default Card' } = route.params
  const item = useSelector((state) => state.decks[title])
  console.log(`DATOS en DItem: ${JSON.stringify(item)}`)
  const dispatch = useDispatch()

  const gotoDeckList = () => {
    navigation.navigate('ListDeck')
  }


  const addCard = () => {
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
  const { questions = [] } = item
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
            icon={{
              name: 'add-box',
              size: 20,
              color: MyColors.accentColor,
            }}
            title="Add Card"
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
            icon={{
              name: 'playlist-play',
              size: 20,
              color: MyColors.primaryColor,
            }}
            title="Start Quiz"
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
    //  backgroundColor: MyColors.defaultPrimaryColor,
    backgroundColor: MyColors.primaryColor,
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
    backgroundColor: MyColors.accentColor,
  },
})

export default DeckItem
