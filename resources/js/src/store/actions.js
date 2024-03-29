
import { http, str } from '../utils'
// Get authenticated user
const actions = {
    loginUser({ commit }){
      commit('TOGGLE_LOADING');
      return http.get( '/me').then(res => {
          commit('TOGGLE_LOADING');
          commit('ADD_ME', res.data );
          console.log(res)
          return res.data;
      })
    },
    updateSidebarWidth({ commit }, width) {
      commit('UPDATE_SIDEBAR_WIDTH', width);
    },
    updateI18nLocale({ commit }, locale) {
      commit('UPDATE_I18N_LOCALE', locale);
    },
    toggleContentOverlay({ commit }) {
      commit('TOGGLE_CONTENT_OVERLAY');
    },
    updateTheme({ commit }, val) {
      commit('UPDATE_THEME', val);
    },
    updateUserRole({ commit }, val) {
      commit('UPDATE_USER_ROLE', val);
    },
    updateWindowWidth({ commit }, width) {
      commit('UPDATE_WINDOW_WIDTH', width);
    },


    // ////////////////////////////////////////////
    // COMPONENT
    // ////////////////////////////////////////////

    // VxAutoSuggest
    updateStarredPage({ commit }, payload) {
      commit('UPDATE_STARRED_PAGE', payload)
    },

    //  The Navbar
    arrangeStarredPagesLimited({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_LIMITED', list)
    },
    arrangeStarredPagesMore({ commit }, list) {
      commit('ARRANGE_STARRED_PAGES_MORE', list)
    },
}

export default actions
