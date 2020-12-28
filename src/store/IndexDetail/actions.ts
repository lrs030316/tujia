import { getindexdetail } from "../../utils/api.js";

export default {
  getIndexDetail({ commit }) {
    const res = getindexdetail();
    commit("getindexdetail",res.result.)
  }
}