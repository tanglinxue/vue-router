import Vue from 'vue'
import VueRouter from '../vue-router'

import Home from '../views/home.vue'
import About from '../views/about.vue'

let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    children:[
      {
        path:'a',
        component:{
          render:h=><h1>about a</h1>
        }
      },
      {
        path:'b',
        component:{
          render:h=><h1>about b</h1>
        }
      }
    ]
  }
]

Vue.use(VueRouter)

export default new VueRouter({
  routes
})
