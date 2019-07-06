import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store'		// 浏览器存储

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		theme: '',
		loading: false,
  },
  mutations: {
		theme(state, params) {
			localStore.set('theme', params);
			state.theme = params;
		},
		loading(state, params) {
			state.loading = params;
		},
  },
  actions: {

  },
	getters: {
		theme: (state) => {
			return state.theme || localStore.get('theme') || {}
		},
	}
})
