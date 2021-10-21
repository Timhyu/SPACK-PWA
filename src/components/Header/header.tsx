import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import { Affix, Container } from '@pwa/ui'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render(h: CreateElement) {
    return (
      <header>
        <Affix>
          <Container>header</Container>
        </Affix>
      </header>
    )
  }
}
