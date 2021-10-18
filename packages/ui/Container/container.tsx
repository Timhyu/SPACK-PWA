import Vue, { CreateElement, RenderContext, VNode } from 'vue'
import { StyledContainer } from './styled'

const Container = Vue.extend({
  name: 'v-container',
  functional: true,
  render(h: CreateElement, context: RenderContext<any>): VNode {
    const { props = {} } = context

    return <StyledContainer {...{ props }}>{context.children}</StyledContainer>
  }
})

export default Container
