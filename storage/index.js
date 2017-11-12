import Reactotron from 'reactotron-react-native'
import {AsyncStorage } from 'react-native'
import startCase from 'lodash.startcase'

export const STORAGE_CARDS_KEY= 'MyUdaciCards:storage_key'

export const decksEXAMPLE = {
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
 * getDecks - return all of the decks along with
 *            their titles, questions, and answers.
 *
 * @return {type} Decks. Possible an array
 */
export async function getDecks(){
  try {
    const Decks = await AsyncStorage.getItem(STORAGE_CARDS_KEY)
    return Decks ? JSON.parse(Decks) : null
  } catch (e) {
    console.error("there was an error", e)
  }
}

/**
 * saveDeckTitle - take in a single title argument and add it to the decks.
 *
 * @param {type} title
 *
 * @return {type}
 */
export const saveDeckTitle = async (title) => {
  try {
    const preparedTitle = startCase(title.toLowerCase()).replace(/\s+/g, '')
    const newEntry = { [preparedTitle]:{title:preparedTitle,questions:[]}}
    const resp=null
    const allDecks = await getDecks() //getting previous data
    // console.log(allDecks);
    return allDecks
    ?
    (
      resp = await AsyncStorage.mergeItem(STORAGE_CARDS_KEY, JSON.stringify(newEntry)),
      resp ? JSON.parse(resp):0
    )
    :
      (
        resp = await AsyncStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(newEntry) ),
        res ? JSON.parse(resp):0
      )

  } catch (error) {
    console.error("there was an error", e)
  }
}

/**
 * getDeck - take in a single id argument and return the deck associated with that id.
 *
 * @param {type} deckId
 *
 * @return {type}
 */
export const getDeck = async (deckId)=>{
  try {
    const deckList = await AsyncStorage.getItem(STORAGE_CARDS_KEY)
    if (deckList !== null){
      return JSON.parse( deckList[deckId] )
    }
  } catch (error) {
    console.log('Error @getDeck... ',error)
  }
}

/**
 * addCardToDeck - take in two arguments, title and card,
 *  and will add the card to the list of questions for the deck with the associated title.
 *
 * @param {type} title Description
 * @param {type} card  Description
 *
 * @return {type} Description
 */
export  function addCardToDeck({ title, card}){
  console.log('title ',title);
  console.log('card ',card);
   return AsyncStorage.getItem(STORAGE_CARDS_KEY)
      .then(results =>{
          const deckList = JSON.parse(results)
          deckList[title].questions = deckList[title].questions.concat(card)
           AsyncStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(deckList))
      })
}

export function SubmitEntry( {entry, key}){
    return AsyncStorage.mergeItem(STORAGE_CARDS_KEY,JSON.stringify({
        [key]:entry,
    }))
}

export function removeThis(tokenId){
  return AsyncStorage.removeItem(tokenId)
}


export function clearStore(){
  return AsyncStorage.clear()
}

export function persistData(){
  return AsyncStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(decksEXAMPLE),
     (error)=>Reactotron.error(error) )
     .then(data=>data,error=>error)
}


export function removeEntry ( key){
    return AsyncStorage.getItem(STORAGE_CARDS_KEY)
        .then(results =>{
            const data = JSON.parse(results)
            data[key]= undefined
            delete data[key]
            AsyncStorage.setItem(STORAGE_CARDS_KEY, JSON.stringify(data))
        })
}
