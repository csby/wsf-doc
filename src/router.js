import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/http/:funId',
      name: 'Http',
      component: () => import('./views/Http.vue'),
      props: true
    },
    {
      path: '/socket/:funId',
      name: 'Socket',
      component: () => import('./views/Socket.vue'),
      props: true
    }
  ]
})
