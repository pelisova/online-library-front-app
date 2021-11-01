import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Toaster from '@meforma/vue-toaster';
import store from '@/store/index.js'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


createApp(App).use(router).use(store).use(Toaster).mount('#app')
