import AviasalesService from '../services/aviasales-service';

import * as typesActions from './types-of-actions';

const {
  FILTER_TICKETS_TYPE_CHEAP,
  FILTER_TICKETS_TYPE_FAST,
  FILTER_TRANSITIONS_ALL,
  FILTER_TRANSITIONS_NONE,
  FILTER_TRANSITIONS_ONE,
  FILTER_TRANSITIONS_TWO,
  FILTER_TRANSITIONS_THREE,
  TICKETS_LOAD,
  LOADER_DISPLAY_ON,
  LOADER_DISPLAY_OFF,
  VISIBLE_TICKETS,
  VISIBLE_TICKETS_DEFAULT,
  TICKETS_EMPTY_ON,
  TICKETS_EMPTY_OFF,
} = typesActions;

// Экшены фильтра тарифов билета
const cheap = () => ({ type: FILTER_TICKETS_TYPE_CHEAP });
const fast = () => ({ type: FILTER_TICKETS_TYPE_FAST });

// Экшены фильтра пересадок по направлению
const transitionsAll = () => ({ type: FILTER_TRANSITIONS_ALL });
const transitionsNone = () => ({ type: FILTER_TRANSITIONS_NONE });
const transitionsOne = () => ({ type: FILTER_TRANSITIONS_ONE });
const transitionsTwo = () => ({ type: FILTER_TRANSITIONS_TWO });
const transitionsThree = () => ({ type: FILTER_TRANSITIONS_THREE });

// Видимый диапазон билетов / Билеты отсутствуют
const visibilityTickets = () => ({ type: VISIBLE_TICKETS });
const visibilityTicketsDefault = () => ({ type: VISIBLE_TICKETS_DEFAULT });
const ticketsEmptyOn = () => ({ type: TICKETS_EMPTY_ON });
const ticketsEmptyOff = () => ({ type: TICKETS_EMPTY_OFF });

// Экшены запроса и получения билетов от сервера
const loaderDisplayOn = () => ({ type: LOADER_DISPLAY_ON });
const loaderDisplayOff = () => ({ type: LOADER_DISPLAY_OFF });
const aviasalesService = new AviasalesService();
const ticketsLoad = () => async (dispatch) => {
  try {
    dispatch(loaderDisplayOn());

    if (aviasalesService.searchId === null) await aviasalesService.getSearchId();

    const { tickets, stop } = await aviasalesService.getTickets();

    dispatch({ type: TICKETS_LOAD, tickets });

    if (!stop) {
      dispatch(ticketsLoad());
    } else {
      dispatch(loaderDisplayOff());
    }
  } catch (err) {
    if (err.message === 'Error code 500.') {
      dispatch(ticketsLoad());
    }
    throw err;
  }
};

export {
  cheap,
  fast,
  transitionsAll,
  transitionsNone,
  transitionsOne,
  transitionsTwo,
  transitionsThree,
  ticketsLoad,
  loaderDisplayOn,
  loaderDisplayOff,
  visibilityTickets,
  visibilityTicketsDefault,
  ticketsEmptyOn,
  ticketsEmptyOff,
};
