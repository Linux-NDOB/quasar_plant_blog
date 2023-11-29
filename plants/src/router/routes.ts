import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', component: () => import('pages/MultiLogin.vue') }
    ]
  },
  {
    path: '/index',
    component: () => import('layouts/UserLAyout.vue'),
    children: [
      { path: '', name: '/index', component: () => import('pages/IndexPage.vue') },
      { path: '/recipes', component: () => import('pages/RecipesPage.vue') },
      { path: '/foods', component: () => import('pages/Plants/FoodPage.vue') },
      { path: '/medic', component: () => import('pages/Plants/MedicPage.vue') },
      { path: '/ornamental', component: () => import('pages/Plants/OrnamentalPage.vue') },
      { path: '/industry', component: () => import('pages/Plants/IndustryPage.vue') },
      { path: '/article', component: () => import('pages/ArticleExample.vue') },
      { path: '/read-article/:id', name: '/read-article/', component: () => import('pages/Read/ReadArticle.vue') },
      { path: '/read-recipe/:id', name: '/read-recipe/', component: () => import('pages/Read/ReadRecipe.vue') }
    ]
  },
  {
    path: '/admin',
    component: () => import('layouts/AdminLayout.vue'),
    children: [
      { path: '', name: '/admin', component: () => import('pages/Admin/MainAdmin.vue') },
      { path: '/create-article', component: () => import('pages/Admin/CreateArticle.vue') },
      { path: '/create-recipe', component: () => import('pages/Admin/CreateRecipe.vue') },
      { path: '/edit-article/:id', name: '/edit-article/', component: () => import('pages/Admin/EditArticle.vue') },
      { path: '/edit-recipe/:id', name: '/edit-recipe/', component: () => import('pages/Admin/EditRecipe.vue') },
      { path: '/list-articles', component: () => import('pages/Admin/ArticlesList.vue') },
      { path: '/list-recipes', component: () => import('pages/Admin/RecipesList.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
