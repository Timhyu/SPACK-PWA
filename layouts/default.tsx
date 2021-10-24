import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue'
// @ts-ignore
import { ThemeProvider } from 'vue-styled-components'

import { ThemeConf } from '@/config/theme.conf'
import AppShell from '@/components/AppShell'

@Component({
  name: 'default'
})
export default class Default extends Vue {
  protected render(h: CreateElement) {
    return (
      <div id="app">
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
