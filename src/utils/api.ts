import http from "./http";

export const getindexdetail = (params: any) => http.get("/indexdetail", params);
export const gethouse = (paramas: any) => http.get("/House", paramas);
