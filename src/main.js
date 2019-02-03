import Vue from 'vue'
import App from './App.vue'
import * as uiv from 'uiv'

Vue.use(uiv)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
