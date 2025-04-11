import { instanceFile } from "./axios"

export const toiLaApi={
    getList:()=>{
        return instanceFile.get('/toiLa.txt');
    }
}