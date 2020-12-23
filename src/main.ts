import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import "amfe-flexible"
import 'vant/lib/index.css';

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
  Tag
} from "vant";

import router from './router/index'

const app = createApp(App);

app.use(NavBar);
app.use(VanImage);
app.use(Empty);
app.use(Swipe);
app.use(SwipeItem);
app.use(Badge);
app.use(ActionSheet);
app.use(Divider);
app.use(Cell);
app.use(CellGroup);
app.use(Popup);
app.use(CouponCell);
app.use(CouponList);
app.use(Tag);

app.use(router);
app.mount('#app');
