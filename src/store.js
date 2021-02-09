import {createStore} from 'redux';
import state from "./state";
import reducers from "./reducers/index";
import { connect } from 'react-redux';

let store = createStore(reducers,state);
console.log(store.getState())
export default store;