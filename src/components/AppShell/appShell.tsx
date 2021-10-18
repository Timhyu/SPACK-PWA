import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { Action } from 'vuex-class'

import VHeader from '@/components/Header'
import VFooter from '@/components/Footer'

@Component({
  name: 'appShell'
})
export default class AppShell extends Vue {
  @Action('getStoreConfig') getStoreConfig: any

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
