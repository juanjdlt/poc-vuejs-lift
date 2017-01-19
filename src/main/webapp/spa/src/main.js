import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import App from './App.vue'
import Navigation from './components/Navigation/Navigation.vue';

Vue.use(VueRouter);


Vue.component('navigation', Navigation); //globally registering a component


//The vue-resource staff (wrappers, handlers) should be under src/config folder
Vue.use(VueResource);
Vue.http.options = {
  root: 'http://localhost:8081/api'  //JUST FOR DEV, couse is proxied, change the URL depending on env
};

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    // Handle global API 404 =>
    if (response.status === 404) {
      router.push('/404');
    }
  });
});


import routes from './routes';

export const router = new VueRouter({
  base: "/spa/",
  routes, // short for routes: routes
  mode: 'history',
  linkActiveClass: 'active'
});

const app = new Vue({
  router,
  // components: {
  //   Navigation
  // },
  render: h => h(App)
}).$mount('#app');