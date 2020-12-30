 
 import { createStore } from 'vuex'
 import IndexDetail from './IndexDetail'
 import HouseDetail from './HouseDetail'

 // create new store instance
 const store = createStore({
  state: {
    // 本地存储里面没有城市信息，有就用，没有就重新设置
    city: localStorage.getItem("city")
    ? JSON.parse(localStorage.getItem("city")) 
    : { name: "北京",
    cityId:300100 }
   },
   modules: {  
     IndexDetail,
     HouseDetail 
   },
   mutations: {
    changeCity(state,payload){
      // 存到浏览器
      localStorage.setItem("city",JSON.stringify(payload));
      state.city = payload;
    }
  }
 });
 export default store





  
