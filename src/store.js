// global window
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { watchForApiRequests } from './features/api/saga';
import rootReducer from './reducer';

const sagaMiddleware = createSagaMiddleware();
const devtools = window.devToolsExtension ? window.devToolsExtension() : f => f;
const store = createStore(rootReducer, {}, compose(applyMiddleware(sagaMiddleware), devtools));

sagaMiddleware.run(watchForApiRequests);

export default store;
