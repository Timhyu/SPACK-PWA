import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import { Container } from '@pwa/ui'

import Logo from '@/components/Logo'
import { StyledHeader, StyledGrid } from './styled'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render(h: CreateElement) {
    return (
      <StyledHeader>
        <Container>
          <StyledGrid>
            <p>Menu</p>
            <Logo />
            <p>Tool</p>
          </StyledGrid>
        </Container>
      </StyledHeader>
    )
  }
}
