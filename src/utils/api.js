import http from "./http";

export const getindexdetail = params => http.get("/indexdetail", params);
