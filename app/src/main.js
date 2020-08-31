import Vue from 'vue'
import App from './App.vue'

import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueRouter from 'vue-router'


Vue.use(VueRouter);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

import Home from './components/Home'
import MembersArea from './components/MembersArea';
import ValidatePreauth from "./components/ValidatePreauth";

const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Home },
		{ path: '/dashboard', component: MembersArea, beforeEnter: (to, from, next) => {
			next();
		}},
		{ path: '/preauth/:type/:status/:data', component: ValidatePreauth },
		{ name: 'login', path: '/login/:error', component: Home },
		{ name: 'register', path: '/register/:error', component: Home }
	]
});

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
