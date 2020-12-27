import Vue from 'vue'
import Vuex from 'vuex'

export const NEW_PHOTOPOLLIO = 'NEW_PHOTOPOLLIO'
export const RECENT_PORTFOLIO = 'RECENT_PORTFOLIO'
export const CONTACT = 'CONTACT'
export const TEST = 'TEST'
Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		colors: ['red', 'blue'],
		titles: ['a', 'b', 'c', 'd', 'e'],
		carousel: [
			{
				title: '첫번째 포트폴리오',
				items: ['https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'],
			},
			{
				title: '프롬 스타',
				items: ['https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'],
			},
			{
				title: '위대한 로맨스',
				items: ['https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg', 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'],
			},
			{
				title: '빛나는 손을',
				items: ['https://cdn.vuetifyjs.com/images/carousel/bird.jpg', 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'],
			},
		],
		Recent_Portfolio: [],
		array: [
			// { name: '111', phone: '111', money: '111', editor: '111' },
			// { name: '222', phone: '222', money: '222', editor: '222' },
		],
	},
	mutations: {
		[RECENT_PORTFOLIO](state) {
			console.log(state.Recent_Portfolio)
		},
		[NEW_PHOTOPOLLIO](state) {
			console.log('sss1')

			console.log(state.test)
			console.log('sss2')
			state.test = '111'

			console.log(state.test)
		},
		[CONTACT](state) {
			state.test
			console.log('index' + state.name)
		},
	},
	actions: {},
	modules: {},
})
