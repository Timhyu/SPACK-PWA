import { notification } from 'ant-design-vue'
import { NotificationOptions } from 'ant-design-vue/types/notification'

import { ThemeConf } from '@/config/theme.conf'

interface PwaNotification extends NotificationOptions {
  prefixCls?: string
}

const { prefix } = ThemeConf
const { success, error, info, warning, warn, open, ...rest } = notification
const pwaNotification: any = { ...rest }
const prefixCls = `${prefix}-notification`

pwaNotification.config({
  bottom: 50,
  duration: 5,
  placement: 'bottomRight'
})
pwaNotification.success = (options: PwaNotification) => {
  notification.success({
    prefixCls,
    ...options
  })
}

pwaNotification.error = (options: PwaNotification) => {
  notification.error({
    prefixCls,
    ...options
  })
}
pwaNotification.info = (options: PwaNotification) => {
  notification.info({
    prefixCls,
    ...options
  })
}
pwaNotification.warning = (options: PwaNotification) => {
  notification.warning({
    prefixCls,
    ...options
  })
}
pwaNotification.warn = (options: PwaNotification) => {
  notification.warn({
    prefixCls,
    ...options
  })
}
pwaNotification.open = (options: PwaNotification) => {
  notification.open({
    prefixCls,
    ...options
  })
}

export { pwaNotification }
