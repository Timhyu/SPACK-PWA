import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { namespace } from 'vuex-class'

import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'

const appModule: any = namespace('app/')

@Component({
  name: 'appShell'
})
export default class AppShell extends Vue {
  @appModule.Action('getStoreConfig') getStoreConfig: Function | any

  // Query Store Config
  private created() {
    this.getStoreConfig()
  }

  protected render(h: CreateElement) {
    return (
      <div class="layout">
        <VHeader />
        {this.$slots.default}
        <VFooter />
      </div>
    )
  }
}
