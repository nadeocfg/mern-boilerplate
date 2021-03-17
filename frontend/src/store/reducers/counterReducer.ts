import { ReduxActionModel } from '../../models/reduxModel';

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action: ReduxActionModel) => {
  switch (action.type) {
    case 'INCREMENT_COUNTER':
      return {
        ...state,
        counter: (state.counter += 1),
      };
    case 'DECREMENT_COUNTER':
      return {
        ...state,
        counter: (state.counter -= 1),
      };
    case 'INCREMENT_NUMBER':
      return {
        ...state,
        counter: (state.counter += action.payload),
      };
    default:
      return state;
  }
};

export default counterReducer;
