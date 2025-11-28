import  API  from "../api/axiosConfig";

export const getReports = () => API.get("/reports");
export const uploadReport = (data) => API.post("/reports", data);
export const deleteReport = (id) => API.delete(`/reports/${id}`);
