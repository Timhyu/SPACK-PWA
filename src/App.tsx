import Vue, { CreateElement } from 'vue'
import { Component } from 'vue-property-decorator'

@Component({
  name: 'app'
})
export default class App extends Vue {
  protected render (h: CreateElement) {
    return (
      <div id="app">
        <div id="nav">
          <router-link to="/">Home</router-link> |
          <router-link to="/about">About</router-link>
        </div>
        <router-view />
      </div>
    )
  }
}
