// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './vuex/store'

Vue.config.productionTip = false

Vue.use(iView);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  //这是初始化加载
  mounted: function(){
    this.$store.dispatch('LOAD_USER_LIST')
  },
})
Vue.use(VueRouter)
Vue.use(VueResource)
