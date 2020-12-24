import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "amfe-flexible"
import 'vant/lib/index.css'
import '../public/iconfont/iconfont.css'
import './assets/css/style.css'
import router from './router/index'
import store from './store/index'

import {
  NavBar,
  Image as VanImage,
  Empty,
  Swipe,
  SwipeItem,
  Badge,
  ActionSheet,
  Divider,
  Cell,
  CellGroup,
  Popup,
  CouponCell,
  CouponList,
  Tag,
  Search, Tabbar, TabbarItem
} from "vant";

import {  } from 'vant';
const app = createApp(App)
app.use(router)
app.use(store)
app.use(Search)
app.use(Tabbar)
app.use(TabbarItem)
app.use(Swipe)
app.use(SwipeItem)
app.mount('#app')
