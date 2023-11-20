import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MultiLogin.vue') },
      { path: 'register', component: () => import('pages/RegisterPage.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/UserLAyout.vue'),
    children: [
      { path: '', name: '/index', component: () => import('pages/IndexPage.vue') },
      { path: '/recipes', component: () => import('pages/RecipesPage.vue') },
      { path: '/foods', component: () => import('pages/FoodPage.vue') },
      { path: '/medic', component: () => import('pages/MedicPage.vue') },
      { path: '/ornamental', component: () => import('pages/OrnamentalPage.vue') },
      { path: '/industry', component: () => import('pages/IndustryPage.vue') },
      { path: '/article', component: () => import('pages/ArticleExample.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: '/admin', component: () => import('pages/Admin/ArticlesList.vue') },
      { path: '/create_article', component: () => import('pages/Admin/CreateArticle.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
