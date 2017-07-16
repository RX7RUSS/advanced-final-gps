import { createStore, combineReducers } from 'redux';

function latLong(state={coordinates: null}, action) {
  switch (action.type) {
    case "LAT_LONG": {
      return {...state, coordinates: action.payload}
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
