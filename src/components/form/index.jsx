
import { Field, Form, Formik } from "formik";
import { useState } from "react";
import { scriptApi } from "../../services/scriptApi";



export const FormURL =()=> {
    const [status, setStatus]=useState('');
    const [script, setScript]=useState('')
  
    const handleSubmit=async(values)=>{
        const formData=new FormData();
        formData.append('url',values.url.trim());
        setStatus('Loading....')
        try {
            const response = await scriptApi.getScript(formData);
            setStatus("Success");
            setScript(response.data)
        } catch (error) {
            setStatus("Error: " + error.message);
        }
    }
    return (
        <div>
            <Formik
                initialValues={{
                url:''
                }}
                onSubmit={handleSubmit}
            >
                <Form className="flex flex-col gap-2">
                    <Field 
                        className="outline-0 border rounded-md px-2 py-1"
                        id="url"
                        name="url"
                        placeholder="Nhập đường dẫn ở đây"
                        type="text"
                    />
                    <button type="submit">OK</button>
                </Form>
            </Formik>
            <span>{status}</span>
            <p>{script}</p>
        </div>
    );
}
