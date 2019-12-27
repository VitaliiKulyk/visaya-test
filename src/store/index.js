import Vue from 'vue';
import Vuex from 'vuex';
// import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
	mutations: {},
	actions: {
		loadItems() {
			console.log('ssd');
			// axios
			// 	.get('https://visaya.solutions/en/rest/V1/visaya/search/devices', {
			// 		params: {
			// 			'categories[]': 51,
			// 			current_page: 1,
			// 			per_page: 5,
			// 			order: 'desc',
			// 			order_by: 'score'
			// 		},
			// 		// withCredentials: true,
			// 		// crossorigin: true,
			// 		headers: {
			// 			'Content-Type': 'application/x-www-form-urlencoded',
			// 			Accept: 'application/json'
			// 			// 'Access-Control-Allow-Origin': '*',
			// 			//'Content-Type': 'application/json'
			// 			// 'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS'
			// 		}
			// 	})
			// 	.then(r => {
			// 		console.log(r);
			// 	})
			// 	.catch(e => {
			// 		console.log({ e });
			// 	});
			// // var { data } = response;
			// // console.log(data);

			const Http = new XMLHttpRequest();
			const url = 'https://visaya.solutions/en/rest/V1/visaya/search/devices';
			Http.open('GET', url);
			Http.send();

			Http.onreadystatechange = () => {
				console.log(Http.responseText);
			};
		}
	},
	modules: {}
});
