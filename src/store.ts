import { applyMiddleware, createStore } from 'redux';
import { rootReducers } from './reducers/';

const middlewares = [];

// if (process.env.NODE_ENV === 'development') {
// }

const store = createStore(rootReducers);

export type AppState = ReturnType<typeof store.getState>;

export default store;
