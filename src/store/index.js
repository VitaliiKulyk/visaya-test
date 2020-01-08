import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: []
	},
	mutations: {
		setItems(state, data) {
			state.items = data;
		}
	},
	actions: {
		async loadItems() {

			axios
				.get('https://visaya.solutions/en/rest/V1/visaya/search/devices', {
					params: {
						// 'categories[]': 51,
						current_page: 1,
						per_page: 5,
						order: 'desc',
						order_by: 'score'
					},
					headers: {
						Accept: 'application/json'
					}
				})
				.then(window.console.log)
				.catch(window.console.log);
			// 	window.console.log(response)
				// var items = data.results;
				// context.commit('setItems', items);
	
			await Promise.resolve();
		}
	},
	modules: {}
});
