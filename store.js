import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { deckList, deckItem, quiz } from './reducers'

/****REDUX-PERSIST****/
import {REHYDRATE, PURGE, persistStore, persistCombineReducers } from 'redux-persist'
//import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
// import storage from 'redux-persist/lib/storage'
import { AsyncStorage } from 'react-native'


const config = {
  // key: 'MyUdaciCards:storage_key',
  key: 'Mytorage_key',
  storage:AsyncStorage,
  debug:true,
  blacklist:['quiz']
}

let reducer = persistCombineReducers(config, { deckList, deckItem, quiz } )
/****REDUX-PERSIST****/


export default function configureStore(){

    const middleWares = [/*logger, thunk*/]
    const enhancers = [applyMiddleware(...middleWares)]

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false,})
        : compose

    let store = createStore(reducer, composeEnhancers(...enhancers) )
    let persistor = persistStore( store )
    persistor.purge()

    return { persistor, store}
}
