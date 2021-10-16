import Vue, { CreateElement, RenderContext, VNode } from 'vue'
import { Button as AntdButton } from 'ant-design-vue'

const Button = Vue.extend({
  name: 'v-button',
  functional: true,
  // props: {
  //   level: {
  //     type: Number as PropType<IBaseTitleProps['level']>,
  //     default: 1,
  //     required: true,
  //   },
  // },
  render(h: CreateElement, context: RenderContext<any>): VNode {
    const { props = {}, listeners = {} } = context
    
    return (
      <AntdButton {...{ props }} {...{ on: listeners }}>
        {context.children}
      </AntdButton>
    )
  }
})

export default Button
