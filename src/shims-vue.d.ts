import Vue from 'vue'
import { Store } from 'vuex'
import VueRouter, { Route } from 'vue-router'

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    [key: string]: any
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    [key: string]: any
  }

  interface VueConstructor {
    $store: Store<any>
    $router: VueRouter
    $route: Route
  }
}
