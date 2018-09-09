import VueRouter from 'vue-router';
import Home from './components/home/Home.vue';
import Dogs from './components/Dog/Dogs.vue';

export default new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/dogs', component: Dogs },
    { path: '*', redirect: '/' }
  ]
});