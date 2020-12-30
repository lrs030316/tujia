import { gethistory } from "../../utils/api";

export default {
  async getHistoryData({ commit }: any) {
    const res: any = await gethistory();
    commit("gethistorydetail",res.result);
  }
}