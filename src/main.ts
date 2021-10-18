import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import apolloProvider from './apollo'
import antd from './plugins/antd'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(antd)

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App)
}).$mount('#app')
