import { combineReducers } from 'redux'

// import comments from '../Comments/reducer'


const initialState ={
    decks:{},
    list:{},
}

function decks(state = initialState, action){
    switch(action.type){        
        default:
        return state
    }
}



// const decks = combineReducers({
//   comments,

// })

export default decks
