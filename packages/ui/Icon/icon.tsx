import { CreateElement, PropType, RenderContext, VNode } from 'vue'

import { StyledIcon } from './styled'

interface IconProps {
  src?: object
  size?: string
}

const Icon: any = {
  name: 'v-icon',
  functional: true,
  props: {
    src: {
      type: Object as PropType<IconProps['src']>,
      required: true
    },
    size: {
      type: String as PropType<IconProps['size']>,
      default: '24'
    }
  },
  render(h: CreateElement, context: RenderContext<IconProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}
    const { src, size } = props
    const Component: any = src || 'span'

    return (
      <StyledIcon {...{ attrs }} style={style} {...{ on: listeners }}>
        <Component size={size} />
      </StyledIcon>
    )
  }
}

export default Icon
