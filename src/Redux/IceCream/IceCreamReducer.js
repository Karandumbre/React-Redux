import { BUY_ICECREAM } from "./IceCreamType";

const initialIceCreamState = {
  numberOfIceCream: 20,
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
