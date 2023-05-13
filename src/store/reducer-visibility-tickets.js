/* eslint-disable default-param-last */
import { VISIBLE_TICKETS, VISIBLE_TICKETS_DEFAULT, TICKETS_EMPTY_ON, TICKETS_EMPTY_OFF } from './types-of-actions';

const initialState = {
  amountTickets: 5,
  empty: false,
};

const visibilityTickets = (state = initialState, action) => {
  switch (action.type) {
    case VISIBLE_TICKETS:
      return { ...state, amountTickets: state.amountTickets + 5 };
    case VISIBLE_TICKETS_DEFAULT:
      return { ...state, amountTickets: 5 };
    case TICKETS_EMPTY_ON:
      return { ...state, empty: true };
    case TICKETS_EMPTY_OFF:
      return { ...state, empty: false };
    default:
      return state;
  }
};

export default visibilityTickets;
