import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import axios from "axios";
import {appAxios} from './utils/appAxios';

/*import appHeader from "src/components/Shared/appHeader.vue"*/

const app = createApp(App);
/*app._component("appHeader", appHeader); */
app.use(router);
(app.config.globalProperties.$axios = axios);
app.config.globalProperties.$appAxios = appAxios;
app.mount('#app');


