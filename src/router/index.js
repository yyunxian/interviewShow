import Vue from 'vue'
import Router from 'vue-router'
import interviewShow from '@/pages/interviewShow'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'interviewShow',
      component: interviewShow
    }
  ]
})
