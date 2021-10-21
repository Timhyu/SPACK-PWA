import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'
import GlobalStyled from '@/components/GlobalStyled'

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
        <VHeader />
        <main>{this.storeConfig && this.$slots.default}</main>
        <VFooter />
      </div>
    )
  }
}
