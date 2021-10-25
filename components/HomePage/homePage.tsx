import { CreateElement, RenderContext, VNode } from 'vue'

import { Container } from '@pwa/ui'

import Banner from '@/components/Banner'
import Breadcrumbs from '@/components/Breadcrumbs'

const HomePage: any = {
  name: 'v-homepage',
  functional: true,
  render(h: CreateElement, context: RenderContext<any>): VNode {
    return (
      <div class="homepage">
        <Container>
          <Breadcrumbs />
          <Banner identifier="homepage_banner" />
        </Container>
      </div>
    )
  }
}

export default HomePage
