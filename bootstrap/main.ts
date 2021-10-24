import Vue from 'vue'
import VueApollo from 'vue-apollo'

import App from '@/layouts/default'
import apollo from '@/plugins/apollo'
import router from '@/plugins/router'
import antd from '@/plugins/antd'
import store from '@/store'
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
