import { combineReducers } from 'redux'
import deckList from './deckList'
import deckItem from './deckItem'



export default combineReducers({
  deckList,
  deckItem,
})
