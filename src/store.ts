import { applyMiddleware, createStore, Middleware } from 'redux'
import { rootReducers } from './reducers/'
import logger from 'redux-logger'

const middlewares: Middleware[] = []

if (__DEV__) {
  middlewares.push(logger)
}

const store = createStore(rootReducers, applyMiddleware(...middlewares))

export type AppState = ReturnType<typeof store.getState>

export default store
