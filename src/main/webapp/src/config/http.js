import Vue from 'vue'
import VueResource from 'vue-resource'
import {router} from './../main'

//VUE-RESOURCE DOCS: https://github.com/pagekit/vue-resource/tree/master/docs
Vue.use(VueResource);

Vue.http.options = {
  root: './api',
};

Vue.http.interceptors.push((request, next) => {
  next((response) => {
    if (response.status === 404) {
      router.push('/404')
    }
  })
})