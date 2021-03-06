import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './style.css'
import VueDragDrop from 'vue-drag-drop'
 
Vue.config.productionTip = false
Vue.use(vuetify);
Vue.use(VueDragDrop);

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
