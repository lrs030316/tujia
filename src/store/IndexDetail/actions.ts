import { getindexdetail } from "../../utils/api";

export default {
  async getIndexData({ commit }: any) {
    const res: any = await getindexdetail();
    commit("getindexdetail",res.result);
  }
}