/* eslint-disable default-param-last */
import { setBtnChecked } from '../services/functions';

import * as TypesActions from './types-of-actions';

const {
  FILTER_TRANSITIONS_ALL,
  FILTER_TRANSITIONS_NONE,
  FILTER_TRANSITIONS_ONE,
  FILTER_TRANSITIONS_TWO,
  FILTER_TRANSITIONS_THREE,
  FILTER_TICKETS_TYPE_CHEAP,
  FILTER_TICKETS_TYPE_FAST,
} = TypesActions;

const initialState = {
  filterTransitions: {
    btnAll: { btnName: FILTER_TRANSITIONS_ALL, checked: true },
    btnNone: { btnName: FILTER_TRANSITIONS_NONE, checked: true },
    btnOne: { btnName: FILTER_TRANSITIONS_ONE, checked: true },
    btnTwo: { btnName: FILTER_TRANSITIONS_TWO, checked: true },
    btnThree: { btnName: FILTER_TRANSITIONS_THREE, checked: true },
  },
  filterTypeTickets: { btnCheap: '', btnFast: '' },
};

const sorting = (state = initialState, action) => {
  switch (action.type) {
    case FILTER_TRANSITIONS_ALL:
      return {
        filterTransitions: { ...setBtnChecked(state.filterTransitions, action) },
        filterTypeTickets: { ...state.filterTypeTickets },
      };
    case FILTER_TRANSITIONS_NONE:
      return {
        filterTransitions: { ...setBtnChecked(state.filterTransitions, action) },
        filterTypeTickets: { ...state.filterTypeTickets },
      };
    case FILTER_TRANSITIONS_ONE:
      return {
        filterTransitions: { ...setBtnChecked(state.filterTransitions, action) },
        filterTypeTickets: { ...state.filterTypeTickets },
      };
    case FILTER_TRANSITIONS_TWO:
      return {
        filterTransitions: { ...setBtnChecked(state.filterTransitions, action) },
        filterTypeTickets: { ...state.filterTypeTickets },
      };
    case FILTER_TRANSITIONS_THREE:
      return {
        filterTransitions: { ...setBtnChecked(state.filterTransitions, action) },
        filterTypeTickets: { ...state.filterTypeTickets },
      };
    case FILTER_TICKETS_TYPE_CHEAP:
      return {
        filterTransitions: { ...state.filterTransitions },
        filterTypeTickets: { btnCheap: 'nav-btn-focused', btnFast: '', btnOptimal: '' },
      };
    case FILTER_TICKETS_TYPE_FAST:
      return {
        filterTransitions: { ...state.filterTransitions },
        filterTypeTickets: { btnCheap: '', btnFast: 'nav-btn-focused', btnOptimal: '' },
      };
    default:
      return state;
  }
};

export default sorting;
