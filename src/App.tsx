import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'
import { ConfigProvider as AntdConfigProvider } from 'ant-design-vue'

import { ThemeConf } from '@config/theme.conf'

@Component({
  name: 'app'
})
export default class App extends Vue {
  protected render (h: CreateElement) {
    return (
      <div id="app">
        <AntdConfigProvider prefixCls={ThemeConf.prefix}>
          <router-view />
        </AntdConfigProvider>
      </div>
    )
  }
}
