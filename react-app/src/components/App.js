import React, { Component } from 'react';
import store from './../store';
import{ connect } from 'react-redux';
//action 是对象 对象中必须有个type
const add = (num)=>{
  console.log('---action',num);
  return{
      type:'ADD',
      text:num
  }
}
class App extends Component {
  addHandle(num){
    //触发action
    store.dispatch(add(num));
  }
  render() {
    return (
      <div>
        <h1>{this.props.count}</h1>
        {/*<button onClick = {this.addHandle.bind(this,2)}>++</button>*/}
        <button onClick={
            ()=>{
                this.props.add(2)
            }
        }>click</button>
      </div>
    );
  }
}
//把store中的state映射到页面中的props
const mapStateToProps = (state) =>{
    return{
        count:state.count
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        add:(num) =>{
            dispatch(add(num))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
