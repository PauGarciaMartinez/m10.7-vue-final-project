import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Users from '../views/Users.vue'
import UserDetails from '../views/UserDetails.vue'
import Pictures from '../views/Pictures.vue'
import PictureDetails from '../views/PictureDetails.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/pictures',
    name: 'Pictures',
    component: Pictures
  },
  {
    path: '/users/:id',
    name: 'UserDetails',
    component: UserDetails,
    props: true
  },
  {
    path: '/pictures/:id',
    name: 'PictureDetails',
    component: PictureDetails,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
