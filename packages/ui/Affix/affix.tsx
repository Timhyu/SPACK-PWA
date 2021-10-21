import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Affix as AntdAffix } from 'ant-design-vue'

interface AffixProps {
  offsetTop?: number
  target?: Function
}

const Affix = Vue.extend({
  name: 'v-affix',
  functional: true,
  props: {
    offsetTop: {
      type: Number as PropType<AffixProps['offsetTop']>,
      default: 20
    },
    target: {
      type: Function as PropType<AffixProps['target']>,
      default: () => document.body
    }
  },
  render(h: CreateElement, context: RenderContext<AffixProps>): VNode {
    const { props = {}, listeners = {} } = context

    return (
      <AntdAffix {...{ props }} {...{ on: listeners }}>
        {context.children}
      </AntdAffix>
    )
  }
})

export default Affix
