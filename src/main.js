import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import App from './App.vue'
import { routes } from './routes'
import { store } from './store/store'
import locale from 'element-ui/lib/locale/lang/en'
import VCalendar from 'v-calendar'
import 'v-calendar/lib/v-calendar.min.css'
import Vuelidate from 'vuelidate'
const VueInputMask = require('vue-inputmask').default

Vue.use(ElementUI, { locale })
Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.use(VueInputMask)
Vue.use(VCalendar, {
  firstDayOfWeek: 2, // Start week from Monday
  titleTransition: 'fade',
  weeksTransition: 'slide-v'
})
var moment = require('moment')

// Vue.http.options.root = 'http://admission.sofia.ifao.net/' // api/log
// FIREBASE DATAs
// https://axios-546ac.firebaseio.com/ - "users for test purposes"
// https://new-project-adm.firebaseio.com/ - "log for test purposes"
axios.defaults.baseURL = 'http://admission.sofia.ifao.net'

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue ({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
