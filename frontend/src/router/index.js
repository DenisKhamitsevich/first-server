import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import MainPageView from '../views/MainPageView.vue'
import AddImageView from '../views/AddImageView.vue'
import ChangeImageView from '../views/ChangeImageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/main',
    name: 'main',
    component: MainPageView
  },
  {
    path: '/addImage',
    name: 'addImage',
    component: AddImageView
  },
  {
    path: '/changeImage/:id',
    name: 'changeImage',
    component: ChangeImageView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router
