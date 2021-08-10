import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Quasar } from 'quasar'
import axios from 'axios'
import VueAxios from 'vue-axios'
import quasarUserOptions from './quasar-user-options'

createApp(App).use(Quasar, quasarUserOptions).use(store).use(router).use(VueAxios, axios).mount('#app')
