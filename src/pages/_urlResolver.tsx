import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'v-urlResolver'
})
export default class VUrlResolver extends Vue {
  protected render(h: CreateElement) {
    return <div>UrlResolver Page</div>
  }
}
