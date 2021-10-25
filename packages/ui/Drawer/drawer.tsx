import { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Drawer as AntdDrawer } from 'ant-design-vue'

interface DrawerProps {
  closable?: boolean
  destroyOnClose?: boolean
  maskClosable?: boolean
  mask?: boolean
  visible?: boolean
  placement?: string
  zIndex?: number
}

const Drawer: any = {
  name: 'v-drawer',
  functional: true,
  props: {
    closable: {
      type: Boolean as PropType<DrawerProps['closable']>,
      default: true
    },
    destroyOnClose: {
      type: Boolean as PropType<DrawerProps['destroyOnClose']>,
      default: false
    },
    maskClosable: {
      type: Boolean as PropType<DrawerProps['maskClosable']>,
      default: true
    },
    mask: {
      type: Boolean as PropType<DrawerProps['mask']>,
      default: true
    },
    visible: {
      type: Boolean as PropType<DrawerProps['visible']>,
      default: false
    },
    placement: {
      type: String as PropType<DrawerProps['placement']>,
      default: 'right'
    },
    zIndex: {
      type: Number as PropType<DrawerProps['zIndex']>,
      default: 999
    }
  },
  render(h: CreateElement, context: RenderContext<DrawerProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdDrawer
        {...{ props }}
        {...{ attrs }}
        // @ts-ignore
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdDrawer>
    )
  }
}

export default Drawer
