import { getDecks } from '../storage'
export const GET_DECKS = 'GET_DECKS'
export const GET_DECKS_SUCCESS = 'GET_DECKS_SUCCESS'
export const GET_DECKS_FAILURE = 'GET_DECKS_FAILURE'



export const getAllDecks = ()=>dispatch=>{
  dispatch({type:GET_DECKS})
  return getDecks()
  .then(data => {
    data
      ? dispatch({type:GET_DECKS_SUCCESS,  deckList: data })
      : ( dispatch({type:GET_DECKS_FAILURE,  error: data })
        ,console.error('nodata ', data))
  })
}
