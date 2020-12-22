import { createStore } from 'vuex'

// create new store instance
const store = createStore({
  state () {
    return {
      count:10
    }
  }
 
})
export default store