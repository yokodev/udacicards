import React, { useState, useRef } from 'react'
import { StyleSheet, TouchableOpacity,View } from 'react-native'
import { Input, Button } from 'react-native-elements'
import { useDispatch } from 'react-redux'
import ElevatedView from 'react-native-elevated-view'
import { addNewCard } from '../../actions';
import FormValidationMessage from '../../components/FormValidationMessage';
import * as MyColors from '../../utils/colors';

const NewCard = ({ route, navigation }) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('')
  const [showError, setShowError] = useState('false')

  const input = useRef([]);
  const shakeInput = () => input.current.shake()
  const clearInput = () => input.current.clear()
  const dispatch = useDispatch()

  const saveNewCard = () => {
    if (question.trim().length > 0 && answer.trim().length > 0) {
      const {item: {title} } = route.params
      const card = {question: question, answer: answer};
      //dispatch(addNewCard({card, title}));
      console.log({card, title});
      navigation.goBack();
      setShowError(false); setQuestion(''); setAnswer('');
    } else {
      setShowError(true)
      shakeInput()
    }
  };

  // console.log('props en NewCard ',this.props);
  return (
    <View style={{flex: 1, backgroundColor: MyColors.textPrimaryColor}}>
      <ElevatedView style={styles.elevatedContainer} elevation={15}>
        <View style={{marginTop: 20, marginBottom: 20, margin: 20}}>
          <Input
            placeholder="Question"
            placeholderTextColor={MyColors.textPrimaryColor}
            onChangeText={(text) => setQuestion(text)}
            ref={input}
            inputStyle={{color: MyColors.textPrimaryColor}}
            selectionColor={MyColors.textPrimaryColor}
          />
          {showError && <FormValidationMessage validationText={'Question Required'} />}
          <Input
            placeholder="Answer"
            placeholderTextColor={MyColors.textPrimaryColor}
            onChangeText={(text) => setAnswer(text)}
            ref={input}
            inputStyle={{color: MyColors.textPrimaryColor}}
            selectionColor={MyColors.textPrimaryColor}
          />
          {showError && <FormValidationMessage validationText={'Answer Required'} />}
        </View>
        <View style={styles.btnContainer}>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            leftIcon={{name: 'add-box'}}
            title="Submit"
            backgroundColor={MyColors.accentColor}
            onPress={saveNewCard}
            buttonStyle={styles.btn}
            raised
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
    // height:200,
    backgroundColor: MyColors.defaultPrimaryColor,
    borderRadius: 5,
  },
  btnContainer: {
    height: 60,
    // marginTop:30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: MyColors.textPrimaryColor,
  },
  btn: {
    width: 200,
  },
});
export default NewCard;
