import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

import HomePage from '@/components/HomePage'

@Component({
  name: 'v-index'
})
export default class VIndex extends Vue {
  protected render(h: CreateElement) {
    return <HomePage />
  }
}
