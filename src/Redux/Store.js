import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import cakeReducers from './Cake/CakeReducer';
import iceCreamReducer from './IceCream/IceCreamReducer';
import logger from 'redux-logger';
import {
    composeWithDevTools
} from 'redux-devtools-extension';


const rootReducer = combineReducers({
    cake: cakeReducers,
    iceCream: iceCreamReducer
})


const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger)))

// console.log('Initial State', store.getState());
export default store;