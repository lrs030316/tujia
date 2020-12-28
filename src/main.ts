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
  Search,
  Tabbar,
  TabbarItem,
  DropdownMenu, 
  DropdownItem,
  Calendar,
  Card,
  Button,
  Tab,
  Tabs
} from "vant";

import {  } from 'vant';
const app = createApp(App)
app.use(NavBar)
app.use(Empty)
app.use(Swipe)
app.use(SwipeItem)
app.use(Badge)
app.use(ActionSheet)
app.use(Divider)
app.use(Cell)
app.use(CellGroup)
app.use(Popup)
app.use(CouponCell)
app.use(CouponList)
app.use(Tag)
app.use(Search)
app.use(Tabbar)
app.use(TabbarItem)
app.use(DropdownMenu)
app.use(DropdownItem)
app.use(Calendar)
app.use(Card)
app.use(Button)
app.use(router)
app.use(store)
app.use(Tab);
app.use(Tabs);
app.mount('#app')
