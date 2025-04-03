import { instance } from "./axios"

export const openaiApi={
    getScript:async(data)=>{
        try{
            const response=await instance.post('/transcribe',data)
            if(response)
                return response.data
        }catch(err){
            return err
        }
    }
}