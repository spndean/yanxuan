import Vue from 'vue'
import VueRouter from 'vue-router'

import Msite from '../pages/Msite/Msite.vue'
import Classify from '../pages/Classify/Classify.vue'
import Discover from '../pages/Discover/Discover.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Loading from '../pages/Loading/Loading.vue'
import LoadingPhone from  '../components/LoadingPhone/LoadingPhone.vue'
import LoadingEmail from  '../components/LoadingEmail/LoadingEmail.vue'
import LoadingRegister from  '../components/LoadingRegister/LoadingRegister.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      redirect: '/msite'
    },
    {
      path: '/msite',
      component: Msite
    },
    {
      path: '/classify',
      component: Classify
    },
    {
      path: '/discover',
      component: Discover
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/loading',
      component: Loading
    },
    {
      path: '/LoadingPhone',
      component: LoadingPhone
    },
    {
      path: '/LoadingEmail',
      component: LoadingEmail
    },
    {
      path: '/LoadingRegister',
      component: LoadingRegister
    },

  ]
})
