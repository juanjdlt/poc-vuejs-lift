import Home from './components/Home/home.vue';
import NotFound from './components/NotFound/notFound.vue';

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