import React, { useState, useRef, useEffect, useImperativeHandle, forwardRef } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Button } from 'react-native-elements'
//  import { useDispatch } from 'react-redux'
import { Formik } from 'formik'
import * as yup from 'yup'
import * as Animatable from 'react-native-animatable';
//  import { addNewCard } from '../../actions';
//  import FormValidationMessage from '../../components/FormValidationMessage';

import * as MyColors from '../../utils/colors'

const styles = StyleSheet.create({
  siTxtIput: {
    fontSize: 18,
    borderColor: MyColors.dividerColor,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 10,
    backgroundColor: 'white',
    color: MyColors.primaryTextColor,
    width: '100%',
    //  height: 40,
    margin: 10,
  },
  screenContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    backgroundColor: '#e6e6e6',
  },
  btnContainer: {
    //  height: 60,
    //  justifyContent: 'center',
    //  alignItems: 'center',
    //  backgroundColor: MyColors.textPrimaryColor,
    //  borderBottomLeftRadius: 10,
    //  borderBottomRightRadius: 10,
  },
  btn: {
    //  width: 200,
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

const SuperInput = ({ value, onChangeText, onBlur, placeholder, ...rest }) => {
  return (
    <>
      <TextInput
        style={styles.siTxtIput}
        placeholder={placeholder}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        {...rest}
      />
      {rest.error && (
        <Animatable.Text style={{ color: 'red', fontSize: 13 }} animation="shake">
          {rest.error}
        </Animatable.Text>
      )}
      {/*  {meta.touched && meta.error ? (<Text style={{ color: 'red' }}>{'x'}</Text>) : null}  */}
    </>
  )
}

const NewCard = (/* { navigation } */) => {
  return (
    <View style={styles.screenContainer}>
      <Formik
        initialValues={{ question: '', answer: '' }}
        validationSchema={validationSchema}
        onSubmit={(values,actions) => {
          alert(JSON.stringify(values, null, 2))
          actions.setSubmitting(false)
          actions.resetForm()
        }}
        //  onReset={(values) => {
        //    alert(JSON.stringify(values, null, 2))
        //  }}
      >
        {({ handleChange, handleSubmit, values, errors, ...rest }) => (
          <View style={styles.formContainer}>
            {/*  <Text style={{ color: 'red' }}>{JSON.stringify(rest, null, 2)}</Text>  */}
            <SuperInput
              onChangeText={handleChange('question')}
              value={values.question}
              placeholder="Question"
              error={errors.question}
            />
            <SuperInput
              onChangeText={handleChange('answer')}
              value={values.answer}
              placeholder="Answer"
              error={errors.answer}
            />
            <View style={styles.btnContainer}>
              <Button
                icon={{
                  name: 'add-box',
                  size: 20,
                  color: 'white',
                }}
                title="Submit"
                loading={rest.isSubmitting}
                onPress={handleSubmit}
                raised
                buttonStyle={styles.btn}
              />
              <Button
                icon={{
                  name: 'redo',
                  size: 20,
                  color: 'white',
                }}
                title="Reset"
                onPress={rest.handleReset}
                raised
                buttonStyle={styles.btn}
              />
            </View>
          </View>
        )}
      </Formik>
    </View>
  )
}

export default NewCard
