import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/js/rem'
import './assets/css/reset.css'

//axios跨域
import axios from 'axios'
Vue.prototype.$axios = axios;
axios.defaults.baseURL = '';
Vue.config.productionTip = false;

//引入音乐播放器  在引入aplayer之前要先引入vue。。也可以直接在MusicDetails.vue中直接引入这些
// import Vue from 'vue'
import APlayer from '@moefe/vue-aplayer';
Vue.use(APlayer);

//引入v-touch
import VueTouch from 'vue-touch';
Vue.use(VueTouch,{name:'v-touch'});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
