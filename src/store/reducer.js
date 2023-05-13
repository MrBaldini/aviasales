/* eslint-disable default-param-last */
import { combineReducers } from 'redux';

import ticketsLoad from './reducer-tickets-load';
import loaderDisplay from './reducer-loader-display';
import visibilityTickets from './reducer-visibility-tickets';
import sorting from './reducer-sorting';

const rootReducer = combineReducers({
  sorting,
  ticketsLoad,
  loaderDisplay,
  visibilityTickets,
});

export default rootReducer;
