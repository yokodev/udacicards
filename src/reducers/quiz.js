import * as Actions from '../actions'



const initialState = {
  quizFlipText: 'Show Answer',
  qOa:true,
  correctAnswers: 0,
  incorrectAnswers: 0,
  currQuestionIndex: 0,
  currVisibleQuestionIndex: 1,
  quizComplete:false,
  showModal:false,
  totalQuestions:0
}
const resetState = {
  quizFlipText: 'Show Answer',
  qOa:true,
  correctAnswers: 0,
  incorrectAnswers: 0,
  currQuestionIndex: 0,
  currVisibleQuestionIndex: 1,
  quizComplete:false,
  showModal:false,
}
function setFlipText(questionOrAnswer){
  return questionOrAnswer
  ? { quizFlipText: 'Back to Question',qOa:!questionOrAnswer}
  : { quizFlipText: 'Show Answer', qOa:!questionOrAnswer }
}

function checkCounters(state){
  const { currVisibleQuestionIndex, totalQuestions } = state
  return currVisibleQuestionIndex === totalQuestions
  ? {
    currVisibleQuestionIndex: currVisibleQuestionIndex,
    quizComplete:true,
    showModal:true
    }
  : {
      currVisibleQuestionIndex: currVisibleQuestionIndex + 1
    }
}

function quiz(state =initialState  , action){
  switch (action.type) {
    case Actions.RESET_QUIZ:
    return {...state, ...resetState}
    case Actions.TOGGLE_MODAL:
    return {...state, showModal:!state.showModal}
    case Actions.SET_FLIP_TEXT:
      const { quizFlipText, qOa } = setFlipText(action.qOa)
      return { ...state, quizFlipText: quizFlipText, qOa: qOa }
    case Actions.PLUS_CORRECT:
      return { ...state, 
        correctAnswers: state.correctAnswers + 1 , 
        currQuestionIndex: state.currQuestionIndex + 1 ,
        ...checkCounters(state)
      }
      case Actions.PLUS_INCORRECT:
      return { ...state,
        incorrectAnswers: state.incorrectAnswers + 1,
        currQuestionIndex:state.currQuestionIndex + 1, 
        ...checkCounters(state)
      }
    case Actions.SET_TOTAL_QUESTIONS:
    return {...state, totalQuestions: action.totalNumberOfQuestions }
    case Actions.GET_DECK_ITEM_SUCCESS:
      return { ...state, totalQuestions:action.deckItem.questions.length}
    default:
      return state
  }
}


export default quiz
