import Vue from 'vue'
import Router from 'vue-router'
import Painter from'@/components/Painter'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Painter',
      component: Painter
    }
  ]
})
