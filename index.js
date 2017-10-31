import { AsyncStorage } from 'react-native'

const CARDS_STORAGE_KEY= 'MyUdaciCards:storage_key'


const decksEXA = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

/**
 * getDecks: return all of the decks along with their titles, questions, and answers. 
 */

export const getDecks =()=>{

    return this.decksEXA

}
/**
 * getDeck: take in a single id argument and return the deck associated with that id. 
 */
export const getDeck =(deckId)=>{}

/**
 * saveDeckTitle: take in a single title argument and add it to the decks. 
 */
export const saveDeckTitle =(title)=>{}

/**
 * addCardToDeck: take in two arguments, title and card, 
 * and will add the card to the list of questions for the deck with the associated title. 
 */
export const addCardToDeck = (title, card) => {}

export function SubmitEntry ( {entry, key}){
    return AsyncStorage.mergeItem(CARDS_STORAGE_KEY,JSON.stringify({
        [key]:entry,
    }))
}

export function removeEntry ( key){
    return AsyncStorage.getItem(CARDS_STORAGE_KEY)
        .then(results =>{
            const data = JSON.parse(results)
            data[key]= undefined
            delete data[key]
            AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(data))
        })
}


