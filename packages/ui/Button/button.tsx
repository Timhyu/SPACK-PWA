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
  render(_h: CreateElement, ctx: RenderContext<any>): VNode {
    console.log(111)
    return (
      <AntdButton>
        <p>123</p>
      </AntdButton>
    )
  }
})

export default Button
