import Vue from 'vue'
import Router from 'vue-router'
import index from '@/shou/cindex'
import shop from '@/pages/shop/shop'
import shopdetail from '@/pages/shopdetail/detail'
import address from '@/pages/address/address'
import assessPrice from '@/pages/assess-price/assess.vue'


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
    },
    {
      path: '/shop',
      name: 'shop',
      component: shop,
      
    },
    {
      path: '/shopdetail',
      name: 'shopdetail',
      component: shopdetail,
      
    },
    {
      path: '/address',
      name: 'address',
      component: address,
      
    },
    {
      path: '/assessPrice',
      name: 'assessPrice',
      component: assessPrice,
      
    }
  ]
})
