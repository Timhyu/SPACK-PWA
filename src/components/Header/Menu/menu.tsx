import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { MenuIcon } from 'vue-feather-icons'

import { Icon } from '@pwa/ui'

import { StyledMenu } from './styled'

@Component({
  name: 'v-menu'
})
export default class Menu extends Vue {
  protected render(h: CreateElement) {
    return (
      <StyledMenu>
        <Icon src={MenuIcon} />
      </StyledMenu>
    )
  }
}
