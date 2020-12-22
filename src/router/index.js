import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import schedule from '../views/schedule'
import contact from '../views/contact'
import test from '../views/test'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Home',
		component: Home,
	},
	{
		path: '/about',
		name: 'About',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	},
	{
		path: '/schedule',
		name: 'schedule',
		component: schedule,
	},
	{
		path: '/contact',
		name: 'contact',
		component: contact,
	},
	{
		path: '/test',
		name: 'test',
		component: test,
	},
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
})

export default router
