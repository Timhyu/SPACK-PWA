import { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Input as AntdInput } from 'ant-design-vue'

interface InputProps {
  disabled?: boolean
  type?: string
  allowClear?: boolean
}

const Input: any = {
  name: 'v-input',
  functional: true,
  props: {
    disabled: {
      type: Boolean as PropType<InputProps['disabled']>,
      default: false
    },
    type: {
      type: String as PropType<InputProps['type']>,
      default: 'text'
    },
    allowClear: {
      type: Boolean as PropType<InputProps['allowClear']>,
      default: false
    }
  },
  render(h: CreateElement, context: RenderContext<InputProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdInput
        {...{ props }}
        {...{ attrs }}
        // @ts-ignore
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdInput>
    )
  }
}

Input.TextArea = AntdInput.TextArea
Input.Search = AntdInput.Search
Input.Group = AntdInput.Group
Input.Password = AntdInput.Password

export default Input
