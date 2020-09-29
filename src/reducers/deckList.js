import * as Actions from '../actions';

export function handleQuestions(stateItem, card) {
  return {
    ...stateItem,
    questions: stateItem.questions.concat(card),
  };
}

const initialState = {};

function deckList(state = initialState, action) {
  switch (action.type) {
    case Actions.GET_DECKS:
      return { ...state, loading: true };
    case Actions.ADD_DECK_SUCCESS:
      return { ...state, ...action.deckTitle };
    case Actions.GET_DECKS_SUCCESS:
      return { ...state, loading: false, ...action.deckList };
    case Actions.GET_DECKS_FAILURE:
      return { ...state, loading: false, error: action.error };
    case Actions.ADD_CARD_TO_DECK_SUCCESS:
      const { title, card } = action;
      const currItem = state[title];
      return { ...state, [title]: handleQuestions(currItem, card) };
    default:
      return state;
  }
}

export default deckList;
