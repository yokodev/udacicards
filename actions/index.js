import { getDecks, getDeck } from '../storage'

export const GET_DECKS = 'actions/GET_DECKS'
export const GET_DECKS_SUCCESS = 'actions/GET_DECKS_SUCCESS'
export const GET_DECKS_FAILURE = 'actions/GET_DECKS_FAILURE'
export const GET_DECK_ITEM = 'actions/GET_DECK_ITEM'
export const GET_DECK_ITEM_SUCCESS = 'actions/GET_DECK_ITEM_SUCCESS'
export const GET_DECK_ITEM_FAILURE = 'actions/GET_DECK_ITEM_FAILURE'


export const getAllDecks = ()=> async dispatch=>{
  dispatch({type:GET_DECKS})
  return getDecks()
  .then(data => {
    data
      ? dispatch({type:GET_DECKS_SUCCESS,  deckList: data })
      : ( dispatch({type:GET_DECKS_FAILURE,  error: data })
        ,console.error('There was an error @getAllDecks ', data))
  })
}


export const getDeckItem = (deckId)=> async dispatch=>{
  dispatch({type:GET_DECK_ITEM})
  return getDeck(deckId)
  .then(data => {
    data
      ? dispatch({type:GET_DECK_ITEM_SUCCESS,  deckItem: data })
      : ( dispatch({type:GET_DECK_ITEM_FAILURE,  error: data })
        ,console.error('There was an error @getDeckItem ', data))
  })
}
