import Home from './components/Home/Home.vue';
import NotFound from './components/NotFound/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound
  }
];

export default routes;