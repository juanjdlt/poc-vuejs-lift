import Vue from 'vue';
import VueRouter from 'vue-router';
import Navigation from './components/Navigation/navigation.vue';
// import Loader from 'components/Loader/Loader';

Vue.use(VueRouter);


// import 'src/config/http';
import routes from './routes';
// import 'src/style.scss';

// export const LoadingState = new Vue();

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
    //Loader
  }

/*  data(){
    return {
      isLoading: false
    };
  },*/

  /*created(){
    LoadingState.$on('toggle', (isLoading) => {
      this.isLoading = isLoading;
    });
  }*/
}).$mount('#app');