import * as Actions from '../actions'

const initialState ={}

function deckItem(state = initialState, action){
    switch(action.type){
        case Actions.GET_DECK_ITEM:
        return {...state, loading:true}
        case Actions.GET_DECK_ITEM_SUCCESS:
        return {...state, loading:false, ...action.deckItem}
        case Actions.GET_DECK_ITEM_FAILURE:
        return {...state, loading:false, error:action.error}
        default:
        return state
    }
}


export default deckItem
