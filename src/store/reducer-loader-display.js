/* eslint-disable default-param-last */
import * as typesActions from './types-of-actions';

const { LOADER_DISPLAY_ON, LOADER_DISPLAY_OFF } = typesActions;

const initialState = { loading: false };

const loaderDisplay = (state = initialState, action) => {
  switch (action.type) {
    case LOADER_DISPLAY_ON:
      return { loading: true };
    case LOADER_DISPLAY_OFF:
      return { loading: false };
    default:
      return state;
  }
};

export default loaderDisplay;
