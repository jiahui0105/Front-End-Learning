<template>
  <div id="app">
    <common-header :config="selectMenu" @setselectmenu="setMenu"></common-header>

    <!--router-view/显示的是router.js中配的路由地址-->
    <div id="container">
      <router-view/>
    </div>

    <common-footer :config="selectMenu" @setselectmenu="setMenu"></common-footer>
  </div>
</template>

<script>
import commonHeader from '@/components/CommonHeader.vue'
import commonFooter from '@/components/CommonFooter.vue'

export default{
    data(){
        return{
            //被选中的菜单  selectMenu属性是同步更新的
            selectMenu: {
                title: '电影',
                color: '#00a1d6',
            },
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
    components: {
        commonHeader,
        commonFooter
    },
    methods: {
        //接收子组件footer传过来的参数 （当前被选中菜单的内容）
        setMenu(data){
            this.selectMenu.title = data.name;
            this.selectMenu.color = data.color;
        }
    },
    created() {
        //页面一刷新 进入app.vue组件，this.$route拿到当前的路由信息，和menuList里的path对比，匹配后setMenu更新
        console.log(this.$route);
        this.menuList.forEach(item => {
            if(item.path == this.$route.path) {
                this.setMenu(item)
            }
        })
    }
}



</script>
<style lang="scss">
  #app{
    #container{
      margin-top:1rem;
      padding-bottom: 1rem;
    }
  }
</style>
