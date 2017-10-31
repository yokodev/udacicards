import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import rootReducer from './reducers'





export default function configureStore(){

    const middleWares = [logger]
    const enhancers = [applyMiddleware(...middleWares)]

    const composeEnhancers = 
        typeof window === 'object' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ?  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ shouldHotReload: false,})
        : compose

    const store = createStore(rootReducer, composeEnhancers(...enhancers) )

    return store
}