import { instanceFile } from "./axios"

export const khachHangApi={
    getList:()=>{
        return instanceFile.get('/doiTuongKH.txt');
    }
}