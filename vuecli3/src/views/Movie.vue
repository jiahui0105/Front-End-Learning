<template>
  <div class="movie">
    <ul>
      <li v-for="m in movieList" @click="detail(m.id)">
        <!--'/movieDetail/'+m.id   字符串拼接-->
        <!--<router-link :to="'/movieDetail/'+m.id">-->
        {{m.name}},{{m.avg}}
        <!--</router-link>-->
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    //data是对象
    data(){
      return {
        movieList:[
          {
            id:1,
            name:'西红柿',
            avg:8.7
          },
          {
            id:2,
            name:'西红柿1',
            avg:8.5
          },
          {
            id:3,
            name:'西红柿2',
            avg:'7.0'
          },
        ]
      }
    },
    methods:{
      detail(id){
        //调用的是main.js中的router中的push方法
        this.$router.push('/movieDetail/'+id);
      }
    }
  }
</script>
<style>

</style>
