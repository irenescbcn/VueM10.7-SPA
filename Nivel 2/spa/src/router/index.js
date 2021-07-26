import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/clients/:id',
    name: 'Clients',
    component: () => import(/* webpackChunkName: "clients" */ '../views/Clients.vue')
  },
  {
    path: '/proveidors',
    name: 'Proveidors',
    component: () => import(/* webpackChunkName: "Proveidors" */ '../views/Proveidors.vue')
  },
  {
    path: '/magatzem',
    name: 'Magatzem',
    component: () => import(/* webpackChunkName: "magatzem" */ '../views/Magatzem.vue')
  },
  {
    path: '/botiga',
    name: 'Botiga',
    component: () => import(/* webpackChunkName: "botiga" */ '../views/Botiga.vue')
  },
  {
    path: '/botiga/alimentacio',
    name: 'Alimentacio',
    component: () => import(/* webpackChunkName: "alimentacio" */ '../views/Alimentacio.vue')
  },
  {
    path: '/botiga/congelats',
    name: 'Congelats',
    component: () => import(/* webpackChunkName: "alimentacio" */ '../views/Congelats.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
