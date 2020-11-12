import { createSlice } from '@reduxjs/toolkit'

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
}

const deckslistSlice = createSlice({
  name: 'decks',
  initialState,
  reducers: {
    deckAdded(state, action) {
      const { title } = action.payload
      return { ...state, [title]: { title, questions: [] } }
    },
    questionAdded(state, action) {
      const { question, title } = action.payload
      state[title].questions.push(question)
    },
  },
})

export const { deckAdded, questionAdded } = deckslistSlice.actions
export default deckslistSlice.reducer
