import state from './moduleClientState.js'
import mutations from './moduleClientMutations.js'
import actions from './moduleClientActions.js'
import getters from './moduleClientGetters.js'

export default {
	namespaced: true,
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
}