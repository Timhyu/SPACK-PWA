import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { BackTop as AntdBackTop } from 'ant-design-vue'

interface BackTopProps {
  target?: Function
  visibilityHeight?: number
}

const BackTop = Vue.extend({
  name: 'v-backTop',
  functional: true,
  props: {
    target: {
      type: Function as PropType<BackTopProps['target']>,
      default: () => window
    },
    visibilityHeight: {
      type: Number as PropType<BackTopProps['visibilityHeight']>,
      default: 400
    }
  },
  render(h: CreateElement, context: RenderContext<BackTopProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdBackTop
        {...{ props }}
        {...{ attrs }}
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdBackTop>
    )
  }
})

export default BackTop
