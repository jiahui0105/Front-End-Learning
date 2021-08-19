import { combineReducers } from "redux";

//Store	收到Action以后，必须给出一个新的 State，这样 View才会发生变化。这种 State的计算过程就叫做 Reducer。
// reducer就是一个纯函数，接收旧的 state和 action，返回新的state

//count-Reducer   count 是state中的属性
const count = (state = 0,action)=> {
    console.log(state,action);
    switch (action.type){
        case 'ADD':
            return state+action.text;
        default :
            return state;
    }
};

//combineReducers() 所做的只是生成一个函数，这个函数来调用你的一系列reducer，
const reducer = combineReducers({
    count
});

export default reducer;