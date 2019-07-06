import Vue from 'vue'
import Vuex from 'vuex'
import localStore from 'store'		// 浏览器存储

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
		theme: '',
  },
  mutations: {
		theme(state, params) {
			localStore.set('theme', params);
			state.theme = params;
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
