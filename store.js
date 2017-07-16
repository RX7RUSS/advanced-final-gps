import { createStore, combineReducers } from 'redux';

function latLong(state = {coordinates: [] }, action) {
  switch (action.type) {
    case "LAT_LONG": {
      state.coordinates.push(action.payload);
      return {...state}
    }

    default:
     return state;
  }
}

const rootReducer = combineReducers({
  // all reducers here
  latLong,
})

export default createStore(rootReducer)
