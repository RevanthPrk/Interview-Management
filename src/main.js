import Vue from 'vue'
import App from './App.vue'
import '../node_modules/timeline-vuejs/dist/timeline-vuejs.css'

import KTabs from '@kevindesousa/vue-k-tabs'
import Vuesax from 'vuesax' //import dependency
import 'vuesax/dist/vuesax.css' // import css style
import 'material-icons/iconfont/material-icons.css';


Vue.use(Vuesax) // implement Vuesax throughout the application
Vue.use(KTabs)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
