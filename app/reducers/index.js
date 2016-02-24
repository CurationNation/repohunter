import { combineReducers } from 'redux';
import {
  RECEIVE_RESOURCES, REQUEST_RESOURCES
} from '../actions';

function resourcesByProject(state = {
  categories: [],
}, action) {
  switch (action.type) {
    case REQUEST_RESOURCES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_RESOURCES:
      return Object.assign({}, state, {
        isFetching: false,
        categories: action.categories,
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  resourcesByProject
});

export default rootReducer;
