import Vue from 'vue';
import VueRouter from 'vue-router';
import Counter from './views/Counter';
import CounterClone from './views/CounterClone';

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: '/', redirect: '/counter' },
    { path: '/counter', component: Counter },
    { path: '/counter-clone', component: CounterClone },
  ],
});
