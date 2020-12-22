import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
// import VueCookie from 'vue-cookie'

Vue.config.productionTip = false

Vue.prototype.$EventBus = new Vue()
const EventBus = new Vue()
// // 플러그인 사용
// Vue.user(VueCookie)

export default EventBus
new Vue({
	EventBus,
	// VueCookie,
	router,
	store,
	vuetify,
	render: h => h(App),
}).$mount('#app')
