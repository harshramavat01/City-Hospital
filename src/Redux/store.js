

import { rootReducer } from './Reducer/root.reducer'
import { rootSaga } from '../Saga/root.saga'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'



const SagaMiddleware = createSagaMiddleware()
const Middleware = [thunk , SagaMiddleware]

export const store = createStore(
     rootReducer,
    applyMiddleware(...Middleware)
)
SagaMiddleware.run(rootSaga);
