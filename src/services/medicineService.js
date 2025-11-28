import  API  from "../api/axiosConfig";

export const getMedicines = () => API.get("/medicines");
export const addMedicine = (data) => API.post("/medicines", data);
export const updateMedicine = (id, data) => API.put(`/medicines/${id}`, data);
export const deleteMedicine = (id) => API.delete(`/medicines/${id}`);
