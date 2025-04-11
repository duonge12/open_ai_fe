import { instanceFile } from "./axios"

export const ngonNguApi={
    getList:()=>{
        return instanceFile.get('/ngonNgu.txt');
    }
}