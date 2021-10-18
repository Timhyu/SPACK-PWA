import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue'
// @ts-ignore
import { ThemeProvider } from 'vue-styled-components'

import { ThemeConf } from '@config/theme.conf'
import AppShell from '@/components/AppShell'

@Component({
  name: 'app'
})
export default class App extends Vue {
  protected render(h: CreateElement) {
    return (
      <div id="app" style={{ minHeight: '3000px' }}>
        <ThemeProvider theme={ThemeConf.theme}>
          <AntdConfigProvider prefixCls={ThemeConf.prefix}>
            <AppShell>
              <router-view />
            </AppShell>
          </AntdConfigProvider>
        </ThemeProvider>
      </div>
    )
  }
}
