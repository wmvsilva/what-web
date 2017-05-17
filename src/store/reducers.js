import { combineReducers } from 'redux'
import locationReducer from './location'
import homeViewReducer from "../routes/Home/modules/homeView";

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    homeViewReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
