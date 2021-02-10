// import {createStore} from 'redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import state from "./state";
import reducers from "./reducers/index";
// import { connect } from 'react-redux';

// let store = createStore(reducers,state);
let store = createStore(reducers, state, applyMiddleware(thunk));

console.log(store.getState())
export default store;