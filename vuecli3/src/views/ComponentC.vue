<template>
  <div>
    <!--点击按钮 更改父元素的msg  子组件向父组件传值用emit-->
    <button @click="$emit('xx',2)">add</button>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
