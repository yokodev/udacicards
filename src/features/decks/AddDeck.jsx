
import React, {useRef, useState} from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
//import { FontAwesome, Ionicons } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as MyColors from '../../utils/colors';
//import TextButton from './TextButton';
import { Input, Button } from 'react-native-elements';
//import { saveDeckTitle, persistData } from '../storage';
import { addDeckItem, getDeckItem } from '../../actions';
import FormValidationMessage from '../../components/FormValidationMessage';
import ElevatedView from 'react-native-elevated-view';
import startCase from 'lodash.startcase';
import * as Yup from 'yup'

const NewDeck = ({ navigation })=> {
  const [title, setTitle ]= useState('')
  const [showError, setShowError ] = useState(false)
  const [errorMsg, setErrorMsg ] = useState('')
  const [validatedTitle, setValidatedTitle ] = useState('')
  
  const [item, setItem ] = useState({})

  const input = useRef();
  const shakeInput = ()=> input.current.shake()
  const clearInput = ()=> input.current.clear()

  const validateInput = async ()=>{
    let schema = Yup.string().required().max(30,`Title can't be longer than 30 characters`)
    try{
      let result = await schema.validate(title)
      if(!result){
        console.error(`There was an error...`)
      }
      console.log(`Result: ${result}`)
      setErrorMsg('')
      setValidatedTitle(result) 
    }catch(e){
      console.info(`Input en error: ${input}`)
      console.log(`Errors name: ${e.name}`)
      console.log(`Errors errors: ${e.errors[0]}`)
      setErrorMsg(e.errors[0])
      shakeInput()
    }
  }


  const saveTitle = () => {
    if (title.trim().length > 0) {
      //Make sure the user is fine by sending that value
      Alert.alert('Are you Sure?',`Send this?: ${title}`,
        [{text:'Cancel',onPress:()=>console.log(`Cancel: not sending it`)},
          {text:'Ok',onPress:()=> validateInput()}
        ],{cancelable: false})

      if(validatedTitle){//the input is correct prepare it ... 
      const preparedTitle = startCase(validatedTitle.toLowerCase()).replace(/\s+/g, '');
      setItem({ title: preparedTitle, questions: [] });
      setValidatedTitle('')
      }
      console.info(`This is the payload: ${JSON.stringify(item)}`)
     // call redux
      //this.props.dispatch(addDeckItem({ title }));
      //this.props.dispatch(getDeckItem({ deckItem: item }));
      //navigation.navigate('Deck', { item });
      //
      //clearInput()
      //setShowError(false) 
      //setTitle('')
      
      // Standby after calling redux with the correct value get back to list
      //navigation.navigate('ListDeck')
    } else {
      setShowError(true)
      shakeInput()
    }
  };

    return (
      <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
        <ElevatedView elevation={15} style={styles.elevatedContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Title for your new deck?</Text>
          </View>
          <View style={styles.txtInputContainer}>
            <Input
              placeholder="Deck Title"
              onChangeText={text => setTitle(text)}
              ref={input}
              selectionColor={MyColors.primaryTextColor}
              //renderErrorMessage={showError}
              //errorStyle={{color: 'red'}}
              errorMessage={errorMsg}

            />
          </View>
          <View style={styles.btnContainer}>
            <Button
              icon={{ name: 'add-box' }}
              title="Create Deck"
              onPress={()=>saveTitle()}
              buttonStyle={styles.btn }
            />
          </View>
        </ElevatedView>
      </View>
    );
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
});

export default NewDeck;
