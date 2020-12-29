import http from "./http";

export const getindexdetail = (params: any) => http.get("/indexdetail", params);
