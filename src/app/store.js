import { configureStore } from '@reduxjs/toolkit';
//import { createStore, applyMiddleware, compose } from 'redux';

import { deckList, deckItem, quiz } from '../reducers/';
import decksReducer from '../features/decklist/deklistSlice';

export default function getStore() {
  let reducer = {
    deckList: deckList,
    decks: decksReducer,
  };

  const store = configureStore({
    reducer,
    devTools: process.env.NODE_ENV !== 'production',
  });

  return { store };
}
