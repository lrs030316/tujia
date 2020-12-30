import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "amfe-flexible"
import 'vant/lib/index.css'
import '../public/iconfont/iconfont.css'
import './assets/css/style.css'
import './assets/css/reset.css'
import './assets/xypiconfont/iconfont.css'
import './assets/image/minefont/iconfont.css'
import router from './router/index'
import store from './store/index'

import {
  Button,
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
  Grid,
  GridItem,
  Skeleton,
  Search,
  Tabbar,
  TabbarItem,
  DropdownMenu, 
  DropdownItem,
  Calendar,
  Field,
  Icon,
  Card,
  Tab,
  Tabs,
  SubmitBar,
  Toast
} from "vant";

const app = createApp(App)
app.use(Button)
app.use(NavBar)
app.use(VanImage)
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
app.use(Icon)
app.use(Skeleton)
app.use(Card)
app.use(Search)
app.use(Tabbar)
app.use(TabbarItem)
app.use(DropdownMenu)
app.use(DropdownItem)
app.use(Calendar)
app.use(Field)
app.use(Tab)
app.use(Tabs)
app.use(Grid)
app.use(GridItem)
app.use(SubmitBar)
app.use(Toast)
app.use(router)
app.use(store)
app.mount('#app')
