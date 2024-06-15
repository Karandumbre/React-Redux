import {
    FETCH_SINGLE_USER_REQUEST,
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_FAILURE
} from './types';
import axios from 'axios';

export const fetchSingleUserRequest = () => {
    return {
        type: FETCH_SINGLE_USER_REQUEST,
    }
}

export const fetchSingleUserSuccess = (user) => {
    return {
        type: FETCH_SINGLE_USER_SUCCESS,
        payload: user
    }
}
export const fetchSingleUserFailure = (error) => {
    return {
        type: FETCH_SINGLE_USER_FAILURE,
        payload: error
    }
}



export const fetchSingleUser = (userID) => {
    return (dispatch) => {
        dispatch(fetchSingleUserRequest())
        axios.get(`https://jsonplaceholder.typicode.com/users/${userID}`).then(res => {
            dispatch(fetchSingleUserSuccess(res.data))
        }).catch(error => {
            dispatch(fetchSingleUserFailure(error.message))
        })
    }
}