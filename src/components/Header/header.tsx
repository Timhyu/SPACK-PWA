import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'v-header'
})
export default class VHeader extends Vue {
  protected render (h: CreateElement) {
    return (
      <header>
        <p>Header</p>
      </header>
    )
  }
}
