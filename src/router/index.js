/* eslint-disable comma-dangle */
/* eslint-disable object-property-newline */
import { createRouter, createWebHistory } from 'vue-router'
const routes = [
  {
    path: '', name: 'Auth', component: () => import('@layouts/Auth.vue'),
    children: [
      { path: '', name: 'Login', component: () => import('@auth/Login.vue') },
    ]
  },
  {
    component: () => import('@layouts/Main.vue'),
    children: [
      { path: '/Boletines', name: 'Boletin', component: () => import('@views/boletin/Boletin.vue') },
      // { path: '/BoletinNoticias', name: 'BoletinNoticias', component: () => import('@views/boletin/BoletinDiaNoticias.vue') }
      /*    { path: '/boletindia', name: 'BoletinDia', component: () => import('@views/boletin/BoletinDia.vue') },
      { path: '/noticiasc', name: 'NoticiasC', component: () => import('@views/noticias/NoticiasCapturadas.vue') } */
    ]
  }
  // { path: '/:catchAll(.*)*', component: () => import('pages/Error404.vue') }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
