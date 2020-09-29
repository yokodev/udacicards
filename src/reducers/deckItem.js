import * as Actions from '../actions';
import { handleQuestions } from './deckList';

const initialState = {};

function deckItem(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_DECK_ITEM:
      return { ...state, loading: true };
    case Actions.GET_DECK_ITEM_SUCCESS:
      return { ...state, loading: false, ...action.deckItem };
    case Actions.GET_DECK_ITEM_FAILURE:
      return { ...state, loading: false, error: action.error };
    case Actions.ADD_CARD_TO_DECK_SUCCESS:
      const { title, card } = action;
      return handleQuestions(state, card);
    default:
      return state;
  }
}

export default deckItem;
