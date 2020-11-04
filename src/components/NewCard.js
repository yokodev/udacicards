/* eslint-disable no-use-before-define */
import React from 'react'
import { StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native'
import { Input, Button } from 'react-native-elements'
import ElevatedView from 'react-native-elevated-view'
import  from ''
import * as MyColors from '../utils/colors'

const NewCard = () => {
  return (
    <View style={{ flex: 1, backgroundColor: MyColors.textPrimaryColor }}>
      <ElevatedView style={styles.elevatedContainer} elevation={15}>
        <View style={{ marginTop: 20, marginBottom: 20, margin: 20 }}>
          <Input
            placeholder="Question"
            placeholderTextColor={MyColors.textPrimaryColor}
            inputStyle={{ color: MyColors.textPrimaryColor }}
            selectionColor={MyColors.textPrimaryColor}
          />
          <Input
            placeholder="Answer"
            placeholderTextColor={MyColors.textPrimaryColor}
            inputStyle={{ color: MyColors.textPrimaryColor }}
            selectionColor={MyColors.textPrimaryColor}
          />
        </View>
        <View style={styles.btnContainer}>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            leftIcon={{ name: 'add-box' }}
            title="Submit"
            backgroundColor={MyColors.accentColor}
            onPress={(values) => alert(JSON.stringify(values))}
            buttonStyle={styles.btn}
            raised
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

export default NewCard
