import http from "./https";
// 城市选择列表
export const getCitiesListApi = (params: any) => http.get("/area/list", params);