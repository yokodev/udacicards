import { combineReducers } from 'redux'
import * as Actions from '../actions'
// import comments from '../Comments/reducer'


const initialState ={}

function decks(state = initialState, action){
    switch(action.type){
        case Actions.GET_DECKS:
        return {...state, loading:true}
        case Actions.GET_DECKS_SUCCESS:
        return {...state, loading:false, deckList:action.deckList}
        case Actions.GET_DECKS_FAILURE:
        return {...state, loading:false, error:action.error}
        default:
        return state
    }
}



// const decks = combineReducers({
//   comments,

// })

export default decks
