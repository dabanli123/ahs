import Vue from 'vue'
import Router from 'vue-router'
import index from '@/shou/cindex'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/trade',
      name: 'trade',
      component: () => import('@/pages/trade/page'),
      children:[
        {
          path:'index',
          component: () => import('@/pages/trade/index'),
        }
      ]
    }
  ]
})
