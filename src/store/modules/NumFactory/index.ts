import { Module } from 'vuex'

import NumFactoryStateTypes from './types'
import RootStateTypes from '../../types'

// Create a new store Modules.
const numFactoryModule: Module<NumFactoryStateTypes, RootStateTypes> = {
  namespaced: true,
  state: {
    name: 'numFactory-module',
    count: 1
  },
  mutations: {
    DOUBLE_COUNT(state: NumFactoryStateTypes) {
      state.count *= 2
    }
  },
  actions: {
    SET_DOUBLE_COUNT({ commit, state }) {
      if ((state.count + 1) % 2 === 0) {
        commit('DOUBLE_COUNT')
      }
    }
  }
}

export default numFactoryModule
