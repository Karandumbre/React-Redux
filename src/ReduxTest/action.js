import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
} from './types';


import axios from 'axios';


export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    }
}



export const fetchUserSuccess = (users) => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    }
}


export const fetchUserFailure = (error) => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    }
}


export const fetchUser = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then((data) => {
            dispatch(fetchUserSuccess(data.data))
        }).catch((error) => {
            dispatch(fetchUserFailure(error.message))
        })
    }
}