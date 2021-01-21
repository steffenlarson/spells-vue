import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/allspells',
    name: 'AllSpells',
    component: loadPage('AllSpellsPage')
  },
  {
    path: '/myspells',
    name: 'MySpells',
    component: loadPage('MySpellsPage')
  },
  {
    path: '/allspells/:index',
    name: 'ActiveSpell',
    component: loadPage('SpellDetailsPage'),
    beforeEnter: authGuard
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})

export default router
