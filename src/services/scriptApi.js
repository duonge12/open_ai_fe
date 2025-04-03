import { instance } from "./axios"

export const scriptApi={
    getScript:async(data)=>{
        try{
            const response=await instance.post('/',data)
            if(response)
                return response.data
        }catch(err){
            return err
        }
    }
}