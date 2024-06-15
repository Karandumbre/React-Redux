import {
    FETCH_SINGLE_USER_SUCCESS,
    FETCH_SINGLE_USER_REQUEST,
    FETCH_SINGLE_USER_FAILURE
} from './types';

const initialState = {
    loading: false,
    user: {},
    error: ''
}


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_SINGLE_USER_REQUEST:

            return {
                ...state,
                loading: true
            };

        case FETCH_SINGLE_USER_SUCCESS:
            return {
                ...state,
                loading: false, user: action.payload, error: ''
            };

        case FETCH_SINGLE_USER_FAILURE:
            return {
                ...state,
                loading: false, user: {}, error: action.payload
            };

        default:
            return state;
    }
}

export default reducer;