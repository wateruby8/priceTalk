import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'
import SearchResult from '../views/SearchResult.vue'
import SearchDetail from '../views/SearchDetail.vue'
import Rank from '../views/Rank.vue'
import Register from '../views/Register.vue'
import AddInvoice from '../views/AddInvoice.vue'
import Service from '../views/Service.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, {
      path: '/searchResult',
      name: 'searchResult',
      component: SearchResult
    }, {
      path: '/searchDetail',
      name: 'searchDetail',
      component: SearchDetail
    }, {
      path: '/rank',
      name: 'rank',
      component: Rank
    }, {
      path: '/register',
      name: 'register',
      component: Register
    }, {
      path: '/addInvoice',
      name: 'addInvoice',
      component: AddInvoice
    },{
      path: '/service',
      name: '/service',
      component: Service
    },

  ],
})

export default router
