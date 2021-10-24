import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import { BackTop, Fragment } from '@pwa/ui'

import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'
import GlobalStyled from '@/components/GlobalStyled'
import { StyledLayout } from './styled'

const appModule: any = namespace('app')

@Component({
  name: 'appShell'
})
export default class AppShell extends Vue {
  @appModule.State('storeConfig') storeConfig: any
  @appModule.Action('getStoreConfig') getStoreConfig: Function | any

  // Query Store Config
  private created() {
    this.getStoreConfig()
  }

  protected render(h: CreateElement) {
    return (
      <div class="layout">
        <GlobalStyled />
        {this.storeConfig && (
          <Fragment>
            <VHeader />
            <StyledLayout>{this.$slots.default}</StyledLayout>
            <VFooter />
          </Fragment>
        )}
        <BackTop />
      </div>
    )
  }
}
