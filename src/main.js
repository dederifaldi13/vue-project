import { createApp } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import './config/icons';

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');
