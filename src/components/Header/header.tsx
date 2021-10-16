import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import { Button } from '@pwa/ui'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render (h: CreateElement) {
    const handleClick = () => {
      console.log(111)
    }

    return (
      <header>
        <p>Header</p>
        <Button type="primary" onClick={handleClick}>Button</Button>
      </header>
    )
  }
}
