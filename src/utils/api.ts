import http from "./http";

export const getindexdetail = (params: any) => http.get("/indexdetail", params);
export const gethouse = (paramas: any) => http.get("/House", paramas);
export const gethistory = (paramas: any) => http.get("/browse", paramas);
export const getloader = (paramas: any) => http.get("/Landlord", paramas);
export const selectlist = (paramas: any) => http.get("/Collect", paramas);
export const collectlist = (paramas: any) => http.get("/Hotlist", paramas);
export const homestaylist = (paramas: any) => http.get("/homestay", paramas);
export const parentsroomlist = (paramas: any) => http.get("/parentsroom", paramas);
export const gooutlist = (paramas: any) => http.get("/goout", paramas);

