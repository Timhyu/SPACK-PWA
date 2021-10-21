import Vue, { CreateElement, RenderContext, VNode } from 'vue'

import { Container } from '@pwa/ui'

import Banner from '@/components/Banner'

const HomePage = Vue.extend({
  name: 'v-homepage',
  functional: true,
  render(h: CreateElement, context: RenderContext<any>): VNode {
    return (
      <div class="homepage">
        <Container>
          <Banner identifier="homepage_banner" />
        </Container>
      </div>
    )
  }
})

export default HomePage
