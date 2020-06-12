import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import {reducerCreator} from '../redux/ReducerCreator'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            reducerCreator
        }),
        allStoreEnhancers
    )

    return store;
}

const allStoreEnhancers = compose(
    applyMiddleware(thunk),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && window.location.hostname==='localhost') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
 );