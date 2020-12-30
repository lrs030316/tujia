import { gethouse } from "../../utils/api";

export default {
  async getHouseData({ commit }: any) {
    const res: any = await gethouse();
    commit("gethousedetail",res.result);
  }
}