import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue'
import Navigation from './components/Navigation/Navigation.vue'

import "./config/http"

Vue.use(VueRouter)
Vue.component('navigation', Navigation) //globally registering the Navegation SinglePageComponent

import routes from './routes'

export const router = new VueRouter({
  routes, // short for routes: routes
  mode: 'history',
  linkActiveClass: 'active'
})

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')