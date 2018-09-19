import Vue from 'vue'
import App from './App.vue'
import Installer from './installer'

Vue.config.productionTip = false

Vue.use(Installer)

new Vue({
  render: h => h(App)
}).$mount('#app')
