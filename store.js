import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

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

const logger = createLogger({
  colors: false,
})
export default createStore(
  rootReducer,
  applyMiddleware(logger)
)
