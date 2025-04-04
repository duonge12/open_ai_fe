
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { openaiApi } from "../../services/openaiApi";
import { useDispatch } from "react-redux";
import { them_kich_ban_mau } from "../../redux/stepSlice";



export const FormURL =()=> {
    const [status, setStatus]=useState('');
    const [script, setScript]=useState('');
    const dispatch=useDispatch();
  
    const handleSubmit=async(values)=>{
        try {
            if(values.url.trim().length ===0) throw Error('Không đc bỏ trống url');
            
            setStatus('Loading....')
            const formData=new FormData();
            formData.append('url',values.url.trim());
            const response = await openaiApi.getScript(formData);
            if(response){
                setStatus("Success");
                setScript(response.data)
                dispatch(them_kich_ban_mau(response.data))
            }
        } catch (error) {
            setStatus("Error: " + error.message);
        }
    }
    return (
        <div className="pl-3">
            <Formik
                initialValues={{
                url:''
                }}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-2">
                    <label htmlFor="url">Nhập link lấy kịch bản:</label>
                    <div className="flex gap-3">
                        <Field 
                            className="outline-0 border rounded-md px-2 py-1"
                            id="url"
                            name="url"
                            placeholder="Nhập đường dẫn ở đây"
                            type="text"
                        />
                        <button className="button-55" type="submit">OK</button>
                    </div>
                </Form>
            </Formik>
            {(status.length> 0 && status ==="Success") && <span className="text-[20px] text-green-500 font-bold">{status}</span>}
            {(status.length> 0 && status ==="Loading....") && <span className="text-[20px] font-bold">{status}</span>}
            {(status.length> 0 && status.includes("Error")) && <span className="text-[20px] text-red-600 font-bold">{status}</span>}
            {
                (script && script.length >0) &&  
                <div>
                    <span className="text-[20px] font-bold">Kịch bản gốc:</span>
                    <p className="max-w-[800px] bg-black text-white p-3 rounded-md">{script}</p>
                </div>
            }
        </div>
    );
}
