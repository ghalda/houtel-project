import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LandingPage from '../views/LandingPage.vue'
import ListHotel from '../views/ListHotel.vue'
import DetailHotel from '../views/DetailHotel.vue'
import PaymentPage from '../views/PaymentPage.vue'
import SuccessPage from '../views/SuccessPage.vue'
import ConfirmationPage from '../views/ConfirmationPage.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/',
    name: 'LandingPage', // same like the name at view file
    component: LandingPage
  },
  {
    path: '/ListHotel',
    name: 'ListHotel', // same like the name at view file
    component: ListHotel
  },
  {
    path: '/DetailHotel',
    name: 'DetailHotel', // same like the name at view file
    component: DetailHotel
  },
  {
    path: '/PaymentPage',
    name: 'PaymentPage', // same like the name at view file
    component: PaymentPage
  },
  {
    path: '/SuccessPage',
    name: 'SuccessPage', // same like the name at view file
    component: SuccessPage
  },
  {
    path: '/ConfirmationPage',
    name: 'ConfirmationPage', // same like the name at view file
    component: ConfirmationPage
  },
  {
    path: '/about',
    name: 'about',
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
