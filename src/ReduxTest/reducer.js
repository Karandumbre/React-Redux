import {
    FETCH_USER_REQUEST,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
} from './types';


const initialState = {
    loading: false,
    users: [],
    error: ''
}



export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USER_REQUEST:
            return {
                ...state, loading: false, users: [], error: ''
            };

        case FETCH_USER_SUCCESS:
            return {
                ...state, loading: false, users: action.payload, error: ''
            };

        case FETCH_USER_FAILURE:
            return {
                ...state, loading: false, users: [], error: action.payload
            };

        default:
            return state;
    }
}

export default reducer;