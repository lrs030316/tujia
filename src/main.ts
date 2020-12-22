import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "amfe-flexible"
import 'vant/lib/index.css';

import {
  NavBar,
  Image as VanImage
} from "vant";

import router from './router/index'

const app = createApp(App);

app.use(NavBar);
app.use(VanImage);

app.use(router);
app.mount('#app');
