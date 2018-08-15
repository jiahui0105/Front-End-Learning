<template>
    <div>
        <h2>我是一个test2组件</h2>
        名字是：{{$route.params.xx}},
        年龄是：{{$route.params.age}}
    </div>
</template>

<script>
    export default {
        name: "Test2"
    }
</script>

<style scoped>

</style>