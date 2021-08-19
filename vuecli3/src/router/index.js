import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Mine from '../views/Mine.vue';
import Test1 from '../views/Test1.vue';
import Test2 from '../views/Test2.vue';
import Error from '../views/Error.vue';
import Movie from '../views/Movie.vue';
import MovieDetail from '../views/MovieDetail.vue';
import ComponentA from '../views/ComponentA.vue';
import Vuex from '../views/Vuex.vue';


Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    alias: '/abc'
  },
  {
    path: '*',
    component: Error
  },
  {
    path: '/movie',
    component: Movie
  },
  {
    path: '/movieDetail/:movieId',
    component: MovieDetail
  },
  {
    path: '/componenta',
    component: ComponentA

  },
  {
    path: '/vuex',
    component: Vuex

  },
  {
    path: '/mine',
    component: Mine,
    children: [
      {
        path: 'test1',
        name: 'test1',
        component: Test1,
      },
      {
        path: 'test2/:name/:age',
        component: Test2,
      },
    ]
  },
  {
    path: '/home',
    redirect: '/'
  },
  {
    path: '/home/:name/:age',
    redirect: '/mine/test2/:name/:age'
  },
];

const router = new VueRouter({
  mode: 'history',   //路由地址样式，history去掉URL上的井号,默认值：hash
  base: process.env.BASE_URL,
  routes,
});

export default router;
