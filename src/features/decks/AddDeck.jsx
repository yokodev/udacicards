import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
// import Icon from 'react-native-vector-icons/FontAwesome';
import { useDispatch } from 'react-redux'
import startCase from 'lodash.startcase'
import { Input, Button } from 'react-native-elements'
// import { saveDeckTitle, persistData } from '../storage';
// import { addDeckItem, getDeckItem } from '../../actions';
import ElevatedView from 'react-native-elevated-view'
import * as MyColors from '../../utils/colors'

import { deckAdded } from './decklistSlice'

const NewDeck = ({ navigation }) => {
  const [title, setTitle] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const input = useRef()
  const shakeInput = () => input.current.shake()
  const clearInput = () => input.current.clear()
  const dispatch = useDispatch()
  let validTitle = false

  function validateInput() {
    let validInput = false
    if (title.length > 30) {
      // error, setiamos error en UI y
      setErrorMsg(`Title can't be longer than 30 characters`)
      shakeInput()
      validInput = false
    } else {
      // no hay error setiamos el valor en validated y
      setErrorMsg('')
      validInput = true
    }
    return validInput
  }

  const saveTitle = () => {
    if (title.trim().length > 0) {
      // Make sure the user is fine by sending that value
      validTitle = validateInput()
      // Alert.alert('Are you Sure?',`Send this?: ${title}`,
      // [{text:'Cancel',onPress:()=>console.log(`Cancel: not sending it`)},
      // {text:'Ok',onPress:()=> validateInput()}
      // ],{cancelable: false})

      if (validTitle) {
        // the input is correct prepare it ...
        const preparedTitle = { title: startCase(title.toLowerCase()).replace(/\s+/g, '') }
        // console.info(`preparerTitle : ${JSON.stringify(preparedTitle)}`)
        dispatch(deckAdded(preparedTitle))
        clearInput()
        setTitle('')
        validTitle = false
        navigation.navigate('ListDeck')
      }
    } else {
      setErrorMsg(`Title can't be empty`)
      shakeInput()
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
      <ElevatedView elevation={15} style={styles.elevatedContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Title for your new deck?</Text>
        </View>
        <View style={styles.txtInputContainer}>
          <Input
            placeholder="Deck Title"
            onChangeText={(text) => setTitle(text)}
            ref={input}
            selectionColor={MyColors.primaryTextColor}
            errorMessage={errorMsg}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            icon={{ name: 'add-box' }}
            title="Create Deck"
            onPress={() => saveTitle()}
            buttonStyle={styles.btn}
          />
        </View>
      </ElevatedView>
    </View>
  )
}

const styles = StyleSheet.create({
  elevatedContainer: {
    marginTop: 30,
    margin: 20,
    // width:350,
    backgroundColor: MyColors.textPrimaryColor,
    borderRadius: 5,
  },
  titleContainer: {
    marginTop: 30,
    marginLeft: 5,
    marginRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
  },
  txtInputContainer: {
    // flex:1,
    marginTop: 20,
    // marginBottom: 20,
    justifyContent: 'center',
    // borderTopColor: 'black'
  },
  txt: {
    // borderBottomColor: 'black'
    // borderTopColor:'black'
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 200,
    marginBottom: 10,
  },
})

export default NewDeck
