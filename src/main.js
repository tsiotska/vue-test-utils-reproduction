import { createApp } from 'vue'
import App from './App.vue'
import { Layout } from "ant-design-vue";

const app = createApp(App)
app.use(Layout)
app.mount('#app')
