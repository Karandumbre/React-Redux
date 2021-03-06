import usersReducer from "./reducer";
import userReducer from './UserReducer';
import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const rootReducer = combineReducers({
    users: usersReducer,
    user: userReducer
})
export const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;