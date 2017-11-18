import * as Actions from '../actions'



const initialState = {
  quizFlipText: 'Show Answer',
  correctAnswers: 0,
  incorrectAnswers: 0,
  currQuestionIndex: 0,
  qOa:true
}

function setFlipText(questionOrAnswer){
  return questionOrAnswer
  ? { quizFlipText: 'Back to Question',qOa:!questionOrAnswer}
  : { quizFlipText: 'Show Answer', qOa:!questionOrAnswer }

}

function quiz(state =initialState  , action){
  switch (action.type) {
    case Actions.SET_FLIP_TEXT:
      const { quizFlipText, qOa } = setFlipText(action.qOa)
      return { ...state, quizFlipText: quizFlipText, qOa: qOa }
    case Actions.PLUS_CORRECT:
      return { ...state, 
        correctAnswers:action.correctAnswers+1, 
        currQuestionIndex:action.currQuestionIndex+1 
      }
      case Actions.PLUS_INCORRECT:
      return { ...state,
        incorrectAnswers: action.incorrectAnswers + 1,
        currQuestionIndex:action.currQuestionIndex+1 
      }
    case Actions.SET_CURRENT_INDEX:
      return { ...state}
    default:
      return state
  }
}


export default quiz
