import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Vuetify from 'vuetify'
import Routes from './routes'
import {store} from './store'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(VueResource)

const router = new VueRouter({
	routes: Routes
})

new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
