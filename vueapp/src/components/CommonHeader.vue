<template>
    <header id="header" :style="{background: config.color}">
        <span class="header-back" @click="goHome">首页</span>
        {{config.title}}
    </header>
</template>

<script>
    export default {
        props: ['config'],
        methods:{
            goHome(){
                //编程式导航
                this.$router.push('/');
                //点击首页后 向header中传值修改其颜色和文字 和@setselectmenu配对
                this.$emit('setselectmenu',{
                    name: '电影',
                    path: '/',
                    color: '#00a1d6'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    #header{
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        background: #00a1d6;
        position: fixed;
        top:0;
        left: 0;

        .header-back{
            position: absolute;
            left:0.2rem;
        }
    }
</style>