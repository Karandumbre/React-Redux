import {
    createStore,
    combineReducers
} from 'redux'
import reducer from './reducers';
import thunk from 'redux-thunk';
import {
    applyMiddleware
} from 'redux';


const rootReducer = combineReducers({
    users: reducer
})


const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;