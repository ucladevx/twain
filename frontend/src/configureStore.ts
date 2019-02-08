import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { rootReducer } from './store'

const enhancers = [applyMiddleware(thunk)]
const w: any = window as any

/* eslint-disable */
if (w.__REDUX_DEVTOOLS_EXTENSION__) {
  enhancers.push(w.__REDUX_DEVTOOLS_EXTENSION__())
}
/* eslint-enable */

export default function configureStore() {
  return createStore(rootReducer, undefined, compose(...enhancers))
}
