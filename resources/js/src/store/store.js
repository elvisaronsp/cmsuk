import Vue from 'vue'
import Vuex from 'vuex'

import state from "./state"
import getters from "./getters"
import mutations from "./mutations"
import actions from "./actions"

Vue.use(Vuex)

import moduleClient from './client/moduleClient.js'
import moduleAccount from './Account/moduleAccount.js'

export default new Vuex.Store({
    getters,
    mutations,
    state,
    actions,
    modules: {
        account: moduleAccount,
        client: moduleClient,
    },
    strict: process.env.NODE_ENV !== 'production'
})
