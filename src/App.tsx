import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue'

import { ThemeConf } from '@config/theme.conf'
import AppShell from '@/components/AppShell'

@Component({
  name: 'app'
})
export default class App extends Vue {
  protected render(h: CreateElement) {
    console.log(111)
    return (
      <div id="app">
        <AntdConfigProvider prefixCls={ThemeConf.prefix}>
          <AppShell>
            <router-view />
          </AppShell>
        </AntdConfigProvider>
      </div>
    )
  }
}
