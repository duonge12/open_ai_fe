import axios from "axios";

export const instance=axios.create({
    baseURL:" http://127.0.0.1:4000",
    headers: {
        "Content-Type": "application/json",
        
    }
});
export const instanceKH=axios.create({
    baseURL:"https://67f1f982c733555e24ae7102.mockapi.io/khach_hang/khach_hang",
});