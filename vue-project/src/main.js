

import { createApp } from 'vue'
import App from './App.vue'
//instead of importing and registrating every ui component in every other component
import  components  from '@/components/UI'

const app = createApp(App);

components.forEach(component => {
    app.component(component.name, component)
});

app.mount('#app')
