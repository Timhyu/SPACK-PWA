import { Module, ActionTree, MutationTree } from 'vuex'

const state: any = () => ({})

const mutations: MutationTree<any> = {}

const actions: ActionTree<any, any> = {}

const userModule: Module<any, any> = {
  namespaced: true,
  state,
  mutations,
  actions
}

export default userModule
