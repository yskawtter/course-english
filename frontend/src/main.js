import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

console.log('hello world')

const app = createApp(App).use(router)

app.use(store)
app.mount('#app')



