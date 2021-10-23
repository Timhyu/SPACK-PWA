import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import {
  HeartIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserIcon
} from 'vue-feather-icons'

import { Container, Icon } from '@pwa/ui'

import Logo from '@/components/Logo'
import Menu from './Menu'
import { StyledHeader, StyledGrid, StyledAction } from './styled'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render(h: CreateElement) {
    return (
      <StyledHeader>
        <Container>
          <StyledGrid>
            <Menu />
            <Logo />
            <StyledAction>
              <Icon src={SearchIcon} />
              <Icon src={HeartIcon} />
              <Icon src={ShoppingCartIcon} />
              <Icon src={UserIcon} />
            </StyledAction>
          </StyledGrid>
        </Container>
      </StyledHeader>
    )
  }
}
