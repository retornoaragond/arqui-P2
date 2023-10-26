import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7e4c25a8 = () => interopDefault(import('..\\pages\\albums_index.vue' /* webpackChunkName: "pages/albums_index" */))
const _49cbce01 = () => interopDefault(import('..\\pages\\composers_index.vue' /* webpackChunkName: "pages/composers_index" */))
const _ca364c6a = () => interopDefault(import('..\\pages\\movies_index.vue' /* webpackChunkName: "pages/movies_index" */))
const _c44c98a6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _0a599d81 = () => interopDefault(import('..\\pages\\albums\\_slug.vue' /* webpackChunkName: "pages/albums/_slug" */))
const _c0b85168 = () => interopDefault(import('..\\pages\\composers\\_slug.vue' /* webpackChunkName: "pages/composers/_slug" */))
const _71ac44c2 = () => interopDefault(import('..\\pages\\movies\\_slug.vue' /* webpackChunkName: "pages/movies/_slug" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/albums_index",
    component: _7e4c25a8,
    name: "albums_index"
  }, {
    path: "/composers_index",
    component: _49cbce01,
    name: "composers_index"
  }, {
    path: "/movies_index",
    component: _ca364c6a,
    name: "movies_index"
  }, {
    path: "/",
    component: _c44c98a6,
    name: "index"
  }, {
    path: "/albums/:slug?",
    component: _0a599d81,
    name: "albums-slug"
  }, {
    path: "/composers/:slug?",
    component: _c0b85168,
    name: "composers-slug"
  }, {
    path: "/movies/:slug?",
    component: _71ac44c2,
    name: "movies-slug"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
