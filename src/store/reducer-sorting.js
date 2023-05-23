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
    btnAll: {
      btnName: FILTER_TRANSITIONS_ALL,
      checked: true,
      divClassName: 'aside__filter-all',
      inputClassName: 'filter-all__input',
      labelClassName: 'filter-all__label',
      label: 'Все',
    },
    btnNone: {
      btnName: FILTER_TRANSITIONS_NONE,
      checked: true,
      divClassName: 'aside__filter-none',
      inputClassName: 'filter-none__input',
      labelClassName: 'filter-none__label',
      label: 'Без пересадок',
    },
    btnOne: {
      btnName: FILTER_TRANSITIONS_ONE,
      checked: true,
      divClassName: 'aside__filter-one',
      inputClassName: 'filter-one__input',
      labelClassName: 'filter-one__label',
      label: '1 пересадка',
    },
    btnTwo: {
      btnName: FILTER_TRANSITIONS_TWO,
      checked: true,
      divClassName: 'aside__filter-two',
      inputClassName: 'filter-two__input',
      labelClassName: 'filter-two__label',
      label: '2 пересадки',
    },
    btnThree: {
      btnName: FILTER_TRANSITIONS_THREE,
      checked: true,
      divClassName: 'aside__filter-three',
      inputClassName: 'filter-three__input',
      labelClassName: 'filter-three__label',
      label: '3 пересадки',
    },
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
        filterTypeTickets: { btnCheap: 'nav-btn-focused', btnFast: '' },
      };
    case FILTER_TICKETS_TYPE_FAST:
      return {
        filterTransitions: { ...state.filterTransitions },
        filterTypeTickets: { btnCheap: '', btnFast: 'nav-btn-focused' },
      };
    default:
      return state;
  }
};

export default sorting;
