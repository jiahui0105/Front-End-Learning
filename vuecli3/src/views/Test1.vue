<template>
    <div>
    <h1>我是一个test1组件</h1>
    姓名:{{$route.params.name}},年龄:{{$route.params.age}}
    </div>
</template>

<script>
    export default {
        name: "Test"
    }
</script>

<style scoped>

</style>