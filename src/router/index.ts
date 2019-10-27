import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/pendingTxs',
    name: 'pendingTxs',
    component: () => import(/* webpackChunkName: "pendingTxs" */ '../views/PendingTxs.vue'),
  },
  {
    path: '/detailedTxs',
    name: 'detailedTxs',
    component: () => import(/* webpackChunkName: "detailedTxs" */ '../views/DetailedTxs.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
