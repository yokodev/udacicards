import startCase from 'lodash.startcase'

export const GET_DECKS = 'actions/GET_DECKS'
export const GET_DECKS_SUCCESS = 'actions/GET_DECKS_SUCCESS'
export const GET_DECKS_FAILURE = 'actions/GET_DECKS_FAILURE'

export const GET_DECK_ITEM = 'actions/GET_DECK_ITEM'
export const GET_DECK_ITEM_SUCCESS = 'actions/GET_DECK_ITEM_SUCCESS'
export const GET_DECK_ITEM_FAILURE = 'actions/GET_DECK_ITEM_FAILURE'

export const ADD_DECK_SUCCESS = 'actions/ADD_DECK_SUCCESS'

export const ADD_CARD_TO_DECK = 'actions/ADD_CARD_TO_DECK'
export const ADD_CARD_TO_DECK_SUCCESS = 'actions/ADD_CARD_TO_DECK_SUCCESS'
export const ADD_CARD_TO_DECK_FAILURE = 'actions/ADD_CARD_TO_DECK_FAILURE'


export const SET_FLIP_TEXT = 'actions/SET_FLIP_TEXT'
export const PLUS_CORRECT = 'actions/PLUS_CORRECT'
export const PLUS_INCORRECT = 'actions/PLUS_INCORRECT'
export const SET_CURRENT_INDEX = 'actions/SET_CURRENT_INDEX'
export const SET_CURRENT_VISIBLE_INDEX = 'actions/SET_CURRENT_VISIBLE_INDEX'
export const QUIZ_COMPLETED = 'actions/QUIZ_COMPLETED'
export const TOGGLE_MODAL = 'actions/TOGGLE_MODAL'
export const RESET_QUIZ = 'actions/RESET_QUIZ'
export const SET_TOTAL_QUESTIONS = 'actions/SET_TOTAL_QUESTIONS'



export const setTotalQuestions = (totalNumberOfQuestions) =>({type: SET_TOTAL_QUESTIONS,totalNumberOfQuestions})
export const resetQuiz = () => ({ type: RESET_QUIZ })
export const toggleModal= ()=>({type: TOGGLE_MODAL})
export const toggleFlipText = qOa => ({ type: SET_FLIP_TEXT, qOa })
export const addCorrect = (currQuestionIndex, correctAnswers, currVisibleQuestionIndex) =>
  ({
     type: PLUS_CORRECT
   })
export const addIncorrect = (currQuestionIndex, incorrectAnswers,currVisibleQuestionIndex) => 
({
   type: PLUS_INCORRECT
 })


export const addDeckItem = ({title})=>{
  const preparedTitle = startCase(title.toLowerCase()).replace(/\s+/g, '')
  const deckTitle = { [preparedTitle]:{title:preparedTitle,questions:[]}}
  return { type:ADD_DECK_SUCCESS, deckTitle }
}

export const addNewCard = ({card, title})=>{
  return {type:ADD_CARD_TO_DECK_SUCCESS, card, title}
}

export const getDeckItem = ({deckItem})=>{
  return{
    type: GET_DECK_ITEM_SUCCESS,
    deckItem
  }
}
