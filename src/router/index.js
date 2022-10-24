import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChatOda from '../views/ChatOda.vue'
import {auth} from '../firebase/config'

const authKontrol = (to,from,next)=>{
  const kullanici = auth.currentUser
  if(!kullanici){
    next({name:'home'})

  }else{
    next()
  }
}

const chatKontrol = (to,from,next)=>{
  const kullanici = auth.currentUser
  if(kullanici){
    next({name:'chatoda'})

  }else{
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      beforeEnter:chatKontrol
    },
    {
      path:'/chat',
      name:'chatoda',
      component:ChatOda,
      beforeEnter:authKontrol
    }
  ]
})

export default router
