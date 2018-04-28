import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/views/Home'
import Accidents from '@/components/views/Accidents'
import Roadworks from '@/components/views/Roadworks'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/accidents',
      name: 'accidents',
      component: Accidents
    },
    {
      path: '/roadworks',
      name: 'roadworks',
      component: Roadworks
    }
  ]
})
