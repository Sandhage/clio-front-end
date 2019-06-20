import { FETCH_RELEASES } from '../actions/index';

export default (state = {}, action) => {
  switch(action.type) {
    case FETCH_RELEASES:
      return action.payload;

    default:
      return state;
  }
};
