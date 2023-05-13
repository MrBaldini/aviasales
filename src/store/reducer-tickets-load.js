/* eslint-disable default-param-last */
import * as typesActions from './types-of-actions';

const { TICKETS_LOAD } = typesActions;

const initialState = { tickets: [], renders: 0 };

const ticketsLoad = (state = initialState, action) => {
  switch (action.type) {
    case TICKETS_LOAD:
      return { tickets: [...state.tickets, ...action.tickets], renders: state.renders + 1 };
    default:
      return state;
  }
};

export default ticketsLoad;
