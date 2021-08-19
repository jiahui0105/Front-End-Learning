<template>
    <!--v-bind修改属性 背景颜色  绑定当前的背景色-->
    <footer id="footer" :style="{background: config.color}">
        <!--<router-link to="/">电影</router-link>-->
        <!--<router-link to="/music">音乐</router-link>-->
        <!--<router-link to="/book">图书</router-link>-->
        <!--<router-link to="/photo">图片</router-link>-->

        <!--v-for循环时 要绑定一个key属性 且对应的值必须是唯一的不能重复-->
        <nav class="footer-link" v-for="obj in menuList" :key="obj.path" @click="chooseNav(obj)">
            <!--<router-link v-for="obj in menuList" :key="obj.path" :to="obj.path">{{obj.name}}</router-link>-->
            <router-link :to="obj.path">{{obj.name}}</router-link>
        </nav>
    </footer>
</template>

<script>
    export default {
        data() {
            return {
                curBgColor:'#00a1d6',  //当前菜单栏的背景色
                //当前菜单内容
                menuList: [
                    {
                        name: '电影',
                        path: '/',
                        color: '#00a1d6'
                    },
                    {
                        name: '音乐',
                        path: '/music',
                        color: '#C20C0C'
                    },
                    {
                        name: '图书',
                        path: '/book',
                        color: '#00B51D'
                    },
                    {
                        name: '图片',
                        path: '/photo',
                        color: '#ffe300'
                    },
                ]
            }
        },
        props:['config'],
    methods: {
        //获取当前点击菜单里的颜色 并且赋值给默认颜色的属性
        chooseNav(obj){
            // this.curBgColor = obj.color;
            // $emit第一个参数是要调用父组件里面的方法 第二个参数代表要传的值
            this.$emit('setselectmenu',obj)
        }
    }
    }
</script>

<style lang="scss" scoped>
    #footer{
        display: flex;
        width: 100%;
        height: 1rem;
        line-height: 1rem;
        text-align: center;
        /*background: pink;*/
        position: fixed;
        bottom:0;
        left: 0;

        .footer-link{
            flex: 1;
        }
        /*每个router-link相当于一个a标签 给每一个路由分块*/
        a{
            color:#000;
        }
        .router-link-exact-active{
            color: #fff;
        }

    }

    /*点击每个footer后 相应的header也发生颜色和文字的变化，这里需要用到父子组件传值

    首先，点击footer后 向父组件app中传值。。
    app 的data中定义selectMenu(title和color)代表选中菜单的内容。。methods中定义setMenu(data)接收子组件footer传过来的值obj并赋值: this.selectMenu.title=data.title
    app中footer用@绑定事件setselectmenu 对应的值当前父组件方法里的setMenu。。
    子组件footer中用emit('setselectmenu',obj)传给父组件

    然后，父组件向子组件header中传值。。app中 header用v-bind绑定属性:config来接收父组件传过来的selectMenu 包含title和color。。
    子组件header用props来接收属性的值  props对应的是数组 props:['config']。。之后就可以显示在header中 {{config.title}}和{{config.color}}*/

</style>