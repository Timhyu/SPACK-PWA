import Vue, { CreateElement, PropType, RenderContext, VNode } from 'vue'

import { ImgContainer, Img } from './styled'

interface ResponsiveImgProps {
  src: string
  alt?: string
  aspectRatio?: number
  backgroundColor?: string
  fullWidth?: boolean
  fullHeight?: boolean
}

const ResponsiveImg = Vue.extend({
  name: 'v-responsive-img',
  functional: true,
  props: {
    src: {
      type: String as PropType<ResponsiveImgProps['src']>,
      required: true
    },
    alt: {
      type: String as PropType<ResponsiveImgProps['alt']>,
      default: ''
    },
    aspectRatio: {
      type: Number as PropType<ResponsiveImgProps['aspectRatio']>,
      default: 1
    },
    backgroundColor: {
      type: String as PropType<ResponsiveImgProps['backgroundColor']>,
      default: 'transparent'
    },
    fullWidth: {
      type: Boolean as PropType<ResponsiveImgProps['fullWidth']>,
      default: true
    },
    fullHeight: {
      type: Boolean as PropType<ResponsiveImgProps['fullHeight']>,
      default: true
    }
  },
  render(h: CreateElement, context: RenderContext<ResponsiveImgProps>): VNode {
    const { data = {}, props } = context
    const attrs = data?.attrs ?? {}
    const { alt, aspectRatio, backgroundColor, fullWidth, fullHeight, src } =
      props

    return (
      <ImgContainer
        class="img-container"
        aspectRatio={aspectRatio}
        backgroundColor={backgroundColor}
      >
        <Img
          src={src}
          alt={alt}
          fullWidth={fullWidth}
          fullHeight={fullHeight}
          {...{ attrs }}
        />
      </ImgContainer>
    )
  }
})

export default ResponsiveImg
