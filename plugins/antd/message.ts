import { message } from 'ant-design-vue'

import { ThemeConf } from '@/config/theme.conf'

const { prefix } = ThemeConf
const pwaMessage: any = message
const prefixCls = `${prefix}-message`

pwaMessage.config({
  top: 30,
  prefixCls,
  duration: 5
})

export { pwaMessage }
