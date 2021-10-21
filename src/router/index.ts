import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VHomePage from '../pages/home'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: VHomePage
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../pages/login')
  },
  {
    path: '*',
    name: 'Url Resolver',
    component: () =>
      import(/* webpackChunkName: "_urlResolver" */ '../pages/_urlResolver')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
