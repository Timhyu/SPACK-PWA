import { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Form as AntdForm } from 'ant-design-vue'

interface FormProps {
  layout?: string
  hideRequiredMark?: boolean
}

const Form: any = {
  name: 'v-form',
  functional: true,
  props: {
    layout: {
      type: String as PropType<FormProps['layout']>,
      default: 'horizontal'
    },
    hideRequiredMark: {
      type: Boolean as PropType<FormProps['hideRequiredMark']>,
      default: false
    }
  },
  render(h: CreateElement, context: RenderContext<FormProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdForm
        {...{ props }}
        {...{ attrs }}
        // @ts-ignore
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdForm>
    )
  }
}

Form.Item = AntdForm.Item

export default Form
