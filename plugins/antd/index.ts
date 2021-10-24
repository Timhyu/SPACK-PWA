import { VueConstructor } from 'vue'
import {
  BackTop,
  Button,
  Carousel,
  Drawer,
  Icon,
  Input,
  Modal,
  Select
} from 'ant-design-vue'

import { pwaNotification } from './notification'
import { pwaMessage } from './message'

const components: any[] = [
  BackTop,
  Button,
  Carousel,
  Drawer,
  Icon,
  Input,
  Select
]

const antd = {
  install(Vue: VueConstructor) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
    Vue.use(Modal)
    Vue.prototype.$notification = pwaNotification
    Vue.prototype.$message = pwaMessage
  }
}

export default antd
