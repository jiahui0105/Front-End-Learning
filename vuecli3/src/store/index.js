import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count:10,
    msg:'zss'
  },
  mutations: {
    //上面的state
    add(state,num){
      state.count+=num;
    },
    sub(state){
      state.count--;
    }
  },
  actions: {
  },
  modules: {
  },
});
