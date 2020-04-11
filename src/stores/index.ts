import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension/developmentOnly'
import rootReducer from '../reducers/rootReducer'

const composeEnhancers = composeWithDevTools(applyMiddleware(thunkMiddleware));
// @ts-ignore
export const store = createStore(rootReducer, {}, composeEnhancers);