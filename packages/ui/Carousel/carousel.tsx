import { CreateElement, PropType, RenderContext, VNode } from 'vue'
import { Carousel as AntdCarousel } from 'ant-design-vue'

interface CarouselProps {
  arrows?: boolean
  autoplay?: boolean
  dots?: boolean
  infinite?: boolean
  vertical?: boolean
}

const Carousel: any = {
  name: 'v-carousel',
  functional: true,
  props: {
    arrows: {
      type: Boolean as PropType<CarouselProps['autoplay']>,
      default: true
    },
    autoplay: {
      type: Boolean as PropType<CarouselProps['autoplay']>,
      default: false
    },
    dots: {
      type: Boolean as PropType<CarouselProps['dots']>,
      default: true
    },
    infinite: {
      type: Boolean as PropType<CarouselProps['infinite']>,
      default: true
    },
    vertical: {
      type: Boolean as PropType<CarouselProps['vertical']>,
      default: false
    }
  },
  render(h: CreateElement, context: RenderContext<CarouselProps>): VNode {
    const { data = {}, props = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <AntdCarousel
        {...{ props }}
        {...{ attrs }}
        style={style}
        {...{ on: listeners }}
      >
        {context.children}
      </AntdCarousel>
    )
  }
}

export default Carousel
