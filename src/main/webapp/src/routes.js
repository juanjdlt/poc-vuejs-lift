import Home from './components/Home/Home.vue'
import NotFound from './components/NotFound/NotFound.vue'
import RestExample from './components/RestExample/RestExample.vue'

//VUE-ROUTER DOCS :: https://router.vuejs.org/en/

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/ejemplo-rest',
    component: RestExample
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;