import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import { Button, Container } from '@pwa/ui'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render(h: CreateElement) {
    const handleClick = () => {
      console.warn(111)
    }

    return (
      <header>
        <Container>
          <Button type="primary" onClick={handleClick}>
            Button
          </Button>
        </Container>
      </header>
    )
  }
}
