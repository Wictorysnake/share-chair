import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home.vue'
import businessOperation from '../pages/business/business_operation.vue'
import profile from '../pages/profile/profile.vue'
import orderList from '../pages/order/order_list.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/business_operation',
      name: 'business_operation',
      component: businessOperation
    },
    {
      path: '/profile',
      name: 'profile',
      component: profile
    },
    {
      path: '/personal_info',
      name: 'personal_info',
      component: resolve => require(['../pages/profile/children/personal_info.vue'], resolve),
      children: [
        {
          path: 'modify_nickname',
          name: 'modify_nickname',
          component: resolve => require(['../pages/profile/children/children/modify_nickname.vue'], resolve)
        },
        {
          path: 'bind_mobile',
          name: 'bind_mobile',
          component: resolve => require(['../pages/profile/children/children/bind_mobile.vue'], resolve)
        }
      ]
    },
    {
      path: '/order_list',
      name: 'order_list',
      component: orderList
    }
  ]
})
