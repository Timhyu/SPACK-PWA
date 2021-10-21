import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from './App'
import apollo from './apollo'
import router from './router'
import store from './store'
import antd from './plugins/antd'
import './registerServiceWorker'

Vue.config.productionTip = false
Vue.use(antd)
Vue.use(VueApollo)

const apolloProvider = new VueApollo({
  ...apollo
})
store.$apollo = apollo

new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App)
}).$mount('#app')
