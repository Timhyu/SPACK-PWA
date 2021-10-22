import Vue, { CreateElement, RenderContext, VNode } from 'vue'
import { StyledContainer } from './styled'

const Container = Vue.extend({
  name: 'v-container',
  functional: true,
  render(h: CreateElement, context: RenderContext<any>): VNode {
    const { data = {}, listeners = {} } = context
    const attrs = data?.attrs ?? {}
    const style = data?.style ?? {}

    return (
      <StyledContainer {...{ attrs }} style={style}>
        {context.children}
      </StyledContainer>
    )
  }
})

export default Container
