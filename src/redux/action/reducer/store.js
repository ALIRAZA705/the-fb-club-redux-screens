// import { createStore, combineReducers } from 'redux'
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './../../saga/index';

import reducer from '../reducer/index'
const sagaMiddleware = createSagaMiddleware();

// let store = createStore(reducer,  applyMiddleware(sagaMiddleware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    
    const store = compose(
        applyMiddleware(sagaMiddleware),
        window.devToolsExtension && window.devToolsExtension(),
      )(createStore)(reducer);
    
    sagaMiddleware.run(rootSaga);


    export default store