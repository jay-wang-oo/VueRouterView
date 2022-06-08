import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/newpage',
    name: 'newpage',
    component: () => import('../views/NewPage.vue'),
    // 加入子項目頁面
    children: [
      {
        path: 'a',
        component: () => import('../views/ComponentA.vue')
      },
      {
        path: 'b',
        component: () => import('../views/ComponentB.vue')
      }
    ]
  },
  {
    path: '/newpage2',
    name: 'newpage2',
    component: () => import('../views/NewPage2.vue'),
    children: [
      {
        path: 'c',
        name: 'c1',
        component: () => import('../views/ComponentC.vue')
      },
      {
        path: 'd',
        name: 'd',
        component: () => import('../views/ComponentD.vue')
      }
    ]
  },
  {
    path: '/namedView',
    component: () => import('../views/NamedView.vue'),
    children: [
      {
        path: 'c2a',
        components: {
          left: () => import('../views/ComponentC.vue'),
          right: () => import('../views/ComponentA.vue')
        }
      },
      {
        path: 'a2b',
        components: {
          left: () => import('../views/ComponentA.vue'),
          right: () => import('../views/ComponentB.vue')
        }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
