import { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Dropdown as AntdDropdown } from 'ant-design-vue'

interface DropdownProps {
  disabled?: boolean
  destroyPopupOnHide?: boolean
  getPopupContainer?: Function
  placement?: string
  visible?: boolean
}

const Dropdown: any = {
  name: 'v-dropdown',
  functional: true,
  props: {
    disabled: {
      type: Boolean as PropType<DropdownProps['disabled']>,
      default: false
    },
    destroyPopupOnHide: {
      type: Boolean as PropType<DropdownProps['destroyPopupOnHide']>,
      default: false
    },
    getPopupContainer: {
      type: Function as PropType<DropdownProps['getPopupContainer']>,
      default: () => document.body
    },
    placement: {
      type: String as PropType<DropdownProps['placement']>,
      default: 'bottomLeft'
    },
    visible: {
      type: Boolean as PropType<DropdownProps['visible']>,
      default: false
    }
  },
  render(h: CreateElement, context: RenderContext<DropdownProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdDropdown
        {...{ props }}
        {...{ attrs }}
        // @ts-ignore
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdDropdown>
    )
  }
}

Dropdown.Button = AntdDropdown.Button

export default Dropdown
