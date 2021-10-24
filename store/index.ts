import Vue from 'vue'
import Vuex, {
  createLogger,
  ActionTree,
  GetterTree,
  ModuleTree,
  MutationTree
} from 'vuex'

import { appModule, cartModule, checkoutModule, userModule } from '@/modules'
import VuexConnector from './connector'
import plugins from './plugins'

const isDev: boolean = process.env.NODE_ENV !== 'production'
const vuexPlugins: any[] = [plugins]

if (isDev) vuexPlugins.push(createLogger())

Vue.use(Vuex)

const state: any = () => ({})
type RootState = ReturnType<typeof state>

const getters: GetterTree<RootState, RootState> = {}

const modules: ModuleTree<RootState> = {
  app: appModule,
  cart: cartModule,
  checkout: checkoutModule,
  user: userModule
}

const mutations: MutationTree<RootState> = {}

const actions: ActionTree<any, RootState> = {}

const store: any = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: vuexPlugins,
  strict: process.env.NODE_ENV !== 'production'
})

export const connector = new VuexConnector(store)

export default store
