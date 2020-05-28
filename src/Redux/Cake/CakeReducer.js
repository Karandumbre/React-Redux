import {
    BUY_CAKE
} from './CakeType';

const initialCakeState = {
    numberOfCakes: 10
}

const cakeReducers = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes: state.numberOfCakes - action.payload
            };

        default:
            return state;
    }

}

export default cakeReducers;