import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
Vue.config.productionTip = false
import TypeNav from '@/components/TypeNav'

import store from '@/Store';

Vue.component(TypeNav.name,TypeNav)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
