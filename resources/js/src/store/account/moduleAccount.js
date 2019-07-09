import state from './moduleAccountState.js'
import mutations from './moduleAccountMutations.js'
import actions from './moduleAccountActions.js'
import getters from './moduleAccountGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}