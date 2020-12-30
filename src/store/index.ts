import { createStore } from 'vuex'
import IndexDetail from './IndexDetail'
import HouseDetail from './HouseDetail'
import HistoryDatail from './HistoryDetail'
import LoaderDatail from './LoaderDetail'

// create new store instance
const store = createStore({
  modules: {
    IndexDetail,
    HouseDetail,
    HistoryDatail,
    LoaderDatail
  }
 
})
export default store