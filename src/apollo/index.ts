import Vue from 'vue'
import VueApollo from 'vue-apollo'

import apollo from './client'

Vue.use(VueApollo)

export default new VueApollo({
  ...apollo
})
