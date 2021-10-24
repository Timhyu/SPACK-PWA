import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { Container } from '@pwa/ui'

import Copyright from './Copyright'
import { StyledFooter } from './styled'

const appModule: any = namespace('app')

@Component({
  name: 'v-footer'
})
export default class VFooter extends Vue {
  @appModule.State('storeConfig') storeConfig: any

  private get copyright() {
    return this.storeConfig?.copyright ?? ''
  }

  protected render(h: CreateElement) {
    return (
      <StyledFooter>
        <Container>
          <Copyright html={this.copyright} />
        </Container>
      </StyledFooter>
    )
  }
}
