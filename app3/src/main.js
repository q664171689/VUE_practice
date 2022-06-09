import { createApp } from 'vue'
import router from '@/router'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import { createPinia } from 'pinia'


 createApp(App).use(router).use(createPinia()).component("TypeNav",TypeNav).mount('#app')

