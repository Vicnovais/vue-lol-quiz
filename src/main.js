import Vue from 'vue'
import App from './App.vue'
import Ripple from 'vue-ripple-directive'

Vue.directive("ripple", Ripple);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
