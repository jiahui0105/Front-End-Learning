import React, { Component } from 'react';
import store from './../store';
import { connect } from 'react-redux';

//redux中要求如果想改变数据state 必须通过action
//action内必须使用一个字符串类型的 type 字段来表示将要执行的动作。多数情况下，type 会被定义成字符串常量
const add = (num) =>{
  console.log('---action',num);
  return{
    type:'ADD',
    text:num
  }
};


class App extends Component {
  addHandle(num){
    //store的dispatch帮助触发action 先要声明
    store.dispatch(add(num));
  };
  render(){
      return (
          <div>
              <h1>{this.props.count}</h1>
              <button onClick = {
                  ()=>{
                      this.props.add(2)
                  }
              }>click</button>
          </div>
      );
  }
}

const mapStateToProps = (state)=>{
    return {
    count:state.count
  }
};

const mapDispatchToProps = (dispatch) => {
    return {
        add: (a)=> {
            dispatch(add(a))
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
