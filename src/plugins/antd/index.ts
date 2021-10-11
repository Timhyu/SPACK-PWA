import { VueConstructor } from 'vue'
import { Button, Input } from 'ant-design-vue'

const components = [Button, Input]

const antd = {
  install(Vue: VueConstructor) {
    components.forEach((component) => {
      Vue.component(component.name, component)
    })
  }
}

export default antd
