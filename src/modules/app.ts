import { MutationTree } from 'vuex'
import { ApolloActionTree } from './interface'

import { GET_STORE_CONFIG } from '@graphql/queries/getStoreConfig'

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

const actions: ApolloActionTree<any, any> = {
  async getStoreConfig({ commit, apollo }) {
    try {
      const { data } = await apollo.query({
        query: GET_STORE_CONFIG
      })

      if (data) {
        commit('saveConfig', data)
      }
    } catch (error) {
      return null
    }
  }
}

const appModule: any = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default appModule
