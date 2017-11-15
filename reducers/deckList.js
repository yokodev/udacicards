import * as Actions from '../actions'

const initialState ={}

function deckList(state = initialState, action){
    switch(action.type){
        // case Actions.GET_DECKS:
        // return {...state, loading:true}
        case Actions.GET_DECKS_SUCCESS:
        return {...state, ...action.deckList}
        case Actions.GET_DECKS_FAILURE:
        return {...state, loading:false, error:action.error}
        default:
        return state
    }
}

export default deckList
