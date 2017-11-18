import React from 'react'
import TextButton from './TextButton'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import  * as MyColors from '../utils/colors'
import { connect } from 'react-redux'
import QA from './QA'
import Modal from './Modal'
import { Button } from 'react-native-elements'
import * as Mcolors from '../utils/colors'
import { toggleFlipText, addCorrect, addIncorrect } from '../actions'

class Quiz extends React.Component {
  state = {
    correctAnswers: 0,
    incorrectAnswers: 0,
    currQuestionIndex: 0,
    showModal: false
  }

  componentDidMount() {
    console.log('this.props en CDM', this.props)
  }

  getCurrEntry = ({ questions }) => {
    return questions[this.state.currQuestionIndex]
  }

  handleCorrectPush = () => {
    const totalQuestions = this.props.deckItem.questions.length
    const { correctAnswers, incorrectAnswers, currQuestionIndex } = this.props.quiz
    const total = correctAnswers + incorrectAnswers
    return total < totalQuestions
    ? this.props.dispatch(addCorrect( currQuestionIndex,correctAnswers))
    : total === totalQuestions && this.showModal()
  }

  handleIncorrectPush = () => {
    const totalQuestions = this.props.deckItem.questions.length
    const { correctAnswers, incorrectAnswers, currQuestionIndex } = this.state
    const total = correctAnswers + incorrectAnswers
    return total < totalQuestions 
    ? this.props.dispatch(addIncorrect(currQuestionIndex,incorrectAnswers)) 
    : total === totalQuestions && this.showModal()
  }

  showModal = () => {
    let { showModal } = this.state
    showModal
      ? this.setState({ showModal: false })
      : this.setState({ showModal: true })
  }

  toggleQoA = () => {
    const { qOa } = this.props.quiz
    this.props.dispatch(toggleFlipText(qOa))
  }


  render() {
    const { questions } = this.props.deckItem
    const { correctAnswers, incorrectAnswers, currQuestionIndex,
            quizFlipText, qOa } = this.props.quiz
    const currEntry = this.getCurrEntry({ questions })
    const totalQuestions = questions.length

    console.group('Details')
    console.log('currInde ', currQuestionIndex)
    console.log('totalQ ', totalQuestions)
    console.log('correct ', correctAnswers)
    console.log('incorrect ', incorrectAnswers)
    console.groupEnd()

    return (
      <View style={styles.mainContainer}>
        <Text style={styles.cardCount}>
          {`${currQuestionIndex +1}/${totalQuestions}`}
        </Text>
        <QA {...currEntry} qOa={qOa} />
        <View style={styles.btnContainer}>
          <Text style={styles.answerTxt} onPress={() => this.toggleQoA()}>
            {quizFlipText}
          </Text>
          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'done' }}
            title="Correct"
            backgroundColor={'green'}
            onPress={this.handleCorrectPush}
            buttonStyle={[styles.btn, { marginBottom: 5 }]}
          />

          <Button
            Component={TouchableOpacity}
            borderRadius={10}
            icon={{ name: 'close' }}
            title="Incorrect"
            backgroundColor={'red'}
            onPress={this.handleIncorrectPush}
            buttonStyle={[styles.btn, { marginBottom: 10 }]}
          />

          {this.state.showModal && (
            <Modal
              showModal={this.showModal}
              modalState={this.state.showModal}
            />
          )}
          {/* <Button
            Component={TouchableOpacity}
            loading
            loadingRight
            borderRadius={10}
            icon={{name:'done'}}
            title='Open'
            backgroundColor ={ Mcolors.defaultPrimaryColor }
           onPress={this.showModal}>modal</Button> */}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardCount: {
    fontSize: 10,
    color: 'black'
  },
  questionTxt: {
    fontSize: 20,
    color: 'black'
  },
  answerTxt: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 14,
    color: 'red'
  },
  mainContainer: {},
  questionContainer: {
    marginTop: 50,
    height: 100
    // backgroundColor:"#rgb(3, 200, 141)"
  },
  answerContainer: {
    marginTop: 50,
    height: 100
    // backgroundColor:"#rgb(3, 200, 141)"
  },
  btn:{
    width:150
  }
  ,
  btnContainer: {
    height: 150,
    alignItems: 'center',
    // borderRadius:10
    // backgroundColor: 'gray',
  },
  btnCorrect: {    
    marginBottom:10
  },
  btnInCorrect: {
    backgroundColor: 'red',
    borderColor: 'black',
    // marginBottom: 5,
    width: 200,
    height: 40
  }
})

const QuestionText = styled.Text`
  background-color: MyColors.defaultPrimaryColor;
`

// const mnTbtn = styled.TextButton``;

const mapStateToProps = ({ deckItem, quiz }) => ({ deckItem, quiz })

export default connect(mapStateToProps)(Quiz)
