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
const Sausage = { template: '<div>baz</div>' };
const router = new VueRouter({
	mode: 'history',
	base: __dirname,
	routes: [
		{ path: '/', component: Home },
		{ path: '/sausage', component: Sausage}
	]
});

new Vue({
	render: h => h(App),
	router,
}).$mount('#app');
