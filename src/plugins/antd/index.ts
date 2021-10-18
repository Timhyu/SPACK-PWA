import { VueConstructor } from 'vue'
import { Button, Input } from 'ant-design-vue'

import { pwaNotification } from './notification'
import { pwaMessage } from './message'

const components: any[] = [Button, Input]

const antd = {
  install(Vue: VueConstructor) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
    Vue.prototype.$notification = pwaNotification
    Vue.prototype.$message = pwaMessage
  }
}

export default antd
