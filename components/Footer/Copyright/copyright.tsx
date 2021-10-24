import { CreateElement, RenderContext, VNode } from 'vue'

import { StyledCopyright } from './styled'

interface CopyrightProps {
  html?: string
}

const Copyright: any = {
  name: 'v-copyright',
  props: {
    html: {
      type: String,
      default: ''
    }
  },
  functional: true,
  render(h: CreateElement, context: RenderContext<CopyrightProps>): VNode {
    const { html } = context.props

    return (
      <StyledCopyright>
        <p domPropsInnerHTML={html} />
      </StyledCopyright>
    )
  }
}

export default Copyright
