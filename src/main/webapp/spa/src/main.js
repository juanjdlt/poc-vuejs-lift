import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource'

import Navigation from './components/Navigation/navigation.vue';

Vue.use(VueRouter);
Vue.use(VueResource);


import routes from './routes';

export const router = new VueRouter({
  base: "/spa/",
  routes,
  mode: 'history',
  linkActiveClass: 'active'
});

const app = new Vue({
  router,
  components: {
    Navigation
  }

}).$mount('#app');