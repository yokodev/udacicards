import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

//import { persistStore, persistCombineReducers } from 'redux-persist'
//import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native




export default function configureStore(){

    const middleWares = [/*logger,*/ thunk]
    const enhancers = [applyMiddleware(...middleWares)]

    const composeEnhancers =
        typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false,})
        : compose

    const store = createStore(rootReducer, composeEnhancers(...enhancers) )

    return store
}
