import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import './assets/main.scss';

import DashboardLayout from '@/components/layouts/DashboardLayout.vue';
import ClientsLayout from '@/components/layouts/ClientsLayout.vue';

const app = createApp(App);

app.component('dashboard-layout', DashboardLayout);
app.component('clients-layout', ClientsLayout);

app.use(router).use(createPinia()).mount('#app');
