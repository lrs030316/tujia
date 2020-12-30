import { createStore } from 'vuex'
import IndexDetail from './IndexDetail'
import HouseDetail from './HouseDetail'

// create new store instance
const store = createStore({
  modules: {
    IndexDetail,
    HouseDetail
  }
 
})
export default store