import Vue from 'vue'
import Vuex, { ActionTree, GetterTree, ModuleTree, MutationTree } from 'vuex'

import { appModule, cartModule, checkoutModule, userModule } from '@/modules'

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

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules
})
