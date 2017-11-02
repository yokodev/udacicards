import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
import Reactotron from 'reactotron-react-native'
import { persistData } from '../storage'
import TextButton from './TextButton'

class ListDeck extends React.Component{

  componentDidMount(){
    // Reactotron.log(this.props)
    // console.log(this.props)
  }

  setInitialData = ()=>{
    persistData().then(data=> Reactotron.log(data))
  }
    render(){
        return(
            <View>
            <Text>Hello from List</Text>
            <TextButton onPress={this.setInitialData}>set initial data</TextButton>
            </View>
        )
    }
}

export default ListDeck
