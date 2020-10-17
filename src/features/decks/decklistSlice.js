import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event',
      },
    ],
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer:
          'The combination of a function and the lexical environment within which that function was declared.',
      },
    ],
  },
};

const deckslistSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {},
});

export default deckslistSlice.reducer;
