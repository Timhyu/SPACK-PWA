import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Select as AntdSelect } from 'ant-design-vue'

interface SelectProps {
  allowClear?: boolean
  disabled?: boolean
  getPopupContainer?: Function
  placeholder?: string
  showSearch?: boolean
  showArrow?: boolean
}

const { Option, OptGroup } = AntdSelect

const Select: any = Vue.extend({
  name: 'v-select',
  functional: true,
  props: {
    allowClear: {
      type: Boolean as PropType<SelectProps['allowClear']>,
      default: false
    },
    disabled: {
      type: Boolean as PropType<SelectProps['disabled']>,
      default: false
    },
    getPopupContainer: {
      type: Function as PropType<SelectProps['getPopupContainer']>,
      default: () => document.body
    },
    placeholder: {
      type: String as PropType<SelectProps['placeholder']>,
      default: ''
    },
    showSearch: {
      type: Boolean as PropType<SelectProps['showSearch']>,
      default: false
    },
    showArrow: {
      type: Boolean as PropType<SelectProps['showArrow']>,
      default: true
    }
  },
  render(h: CreateElement, context: RenderContext<SelectProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdSelect
        {...{ props }}
        {...{ attrs }}
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdSelect>
    )
  }
})

Select.Option = Option
Select.OptGroup = OptGroup

export default Select
