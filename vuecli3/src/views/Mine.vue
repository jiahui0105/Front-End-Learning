<template>
  <div>
    <h1>这个是我的页面</h1>
    <router-link :to="{name:'test1',params:{name:'zhangsan', age:18}}">子路由1-传参</router-link> |
    <router-link to="/mine/test2/zhangsan/18">子路由2-URL传参</router-link>
    <router-view/>
  </div>
</template>
<script>

</script>
<style>

</style>
