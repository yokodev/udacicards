import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import { StyleSheet, View } from 'react-native'
import { Input, Button } from 'react-native-elements'
//  import { useDispatch } from 'react-redux'
import { ErrorMessage, Field, Formik } from 'formik'
import * as yup from 'yup'
import ElevatedView from 'react-native-elevated-view'
//  import { addNewCard } from '../../actions';
//  import FormValidationMessage from '../../components/FormValidationMessage';
import * as MyColors from '../../utils/colors'

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
})

const validationSchema = yup.object().shape({
  question: yup
    .string()
    .required('Question is required')
    .min(3, 'At least type something...')
    .max(25, 'Easy Dont get too excited now, make it reasonable...'),
  answer: yup
    .string()
    .required('The Answer is also needed')
    .min(3, 'At least type something...')
    .max(25, 'Easy Dont get too excited now, make it reasonable...'),
})

const SuperInput = forwardRef(
  ({ iconName, placeholder, onChange, errorMessage, shakeNow }, ref) => {
    const [ setShakeNow] = useState(false)
    const inputRef = useRef()
    const shakeInput = () => inputRef.current.shake()
    useEffect(() => {
      if (shakeNow) {
        shakeInput()
      }
    }, [shakeNow])

    useImperativeHandle(ref, () => ({
      setShakeNow,
    }))

    return (
      <Input
        leftIcon={{ type: 'font-awesome', name: iconName, size: 30 }}
        placeholder={placeholder}
        placeholderTextColor={MyColors.textPrimaryColor}
        onChangeText={onChange}
        inputStyle={{ color: MyColors.textPrimaryColor }}
        selectionColor={MyColors.textPrimaryColor}
        errorMessage={errorMessage}
        ref={inputRef}
      />
    )
  }
)

const NewCard = ({ navigation }) => {
  const inputRef = useRef()
  const shakeIt = () => { inputRef.current.shake() }
  const clearIt = () => { input.current.clear() }
  return (
    <Formik
      initialValues={{ question: '', answer: '' }}
      onSubmit={(values, { setFieldValue }) => {
        shakeIt()
        alert(JSON.stringify(values, null, 2))
        //  values.answer = '' IM TRING TO MAKE THE COMPONENT SHAKE USE useRef with formik
        //  values.question = ''
        //  This is not working
      }}
      validationSchema={validationSchema}>
      {({ isValid, handleChange, errors, handleSubmit, handleReset } = formikProps) => (
        <>
          <ElevatedView style={styles.elevatedContainer} elevation={15}>
            <View style={{ marginTop: 20, marginBottom: 20, margin: 20 }}>
              <SuperInput
                iconName="question"
                placeholder="Question"
                onChange={handleChange('question')}
                errorMessage={errors.question}
                ref={inputRef}
              />
              <SuperInput
                iconName="puzzle-piece"
                placeholder="Answer"
                onChange={handleChange('answer')}
                errorMessage={errors.answer}
              />
            </View>
            <View style={styles.btnContainer}>
              <Button
                icon={{
                  name: 'add-box',
                  size: 20,
                  color: 'white',
                }}
                title="Submit"
                onPress={handleSubmit}
                loading={false}
                buttonStyle={styles.btn}
              />
            </View>
          </ElevatedView>
        </>
      )}
    </Formik>
  )
}

export default NewCard
