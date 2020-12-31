import { getloader } from "../../utils/api";

export default {
  async getHistoryData({ commit }: any) {
    const res: any = await getloader();
    commit("getloaderdetail",res.result);
  }
}