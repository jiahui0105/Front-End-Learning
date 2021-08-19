import { createStore } from 'redux';
import reducer from './reducer';


const initialState ={
    count:5
};
//接收两个 reducer state
const store = createStore(reducer,initialState);
export default store;