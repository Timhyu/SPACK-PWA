import { Module, ActionTree, MutationTree } from 'vuex'

const state: any = () => ({
  currency: null,
  storeConfig: null
})

const mutations: MutationTree<any> = {
  saveConfig(state: any, playload: any) {
    const { currency, storeConfig } = playload

    state.currency = currency
    state.storeConfig = storeConfig
  }
}

const actions: ActionTree<any, any> = {}

const appModule: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default appModule
