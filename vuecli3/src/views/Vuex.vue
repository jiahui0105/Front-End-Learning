<template>
  <div>
    <!--引用store.js中的state  别的组件都可以用-->
    <h1>{{count}}</h1>
    <h1>{{msg}}</h1>
    <button @click="$store.commit('add',2)">+</button>
    <button  @click="$store.commit('sub')">-</button>
  </div>
</template>

<script>
  import ComponentB from '@/views/ComponentB.vue';
  import ComponentC from '@/views/ComponentC.vue';
  import { mapState } from 'vuex';
    export default {
      data(){
        return{

        }
      },
      // state访问状态对象的三种方法 可以直接使用插值的方式


      // computed:{
      //   count(){
      //     return this.$store.state.count;
      //   }
      // }


      // computed:mapState({
      //   //两种 箭头函数写{}的话要有返回值
      //   count1: state=>{
      //     return state.count
      //   },
      //   xx: state=>state.msg
      //  })


      computed:mapState(['count','msg'])

    }
</script>

<style scoped>

</style>
