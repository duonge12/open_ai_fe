import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { ModalViral } from "./modal";


export const FormLyDoViral=()=>{
    const {ly_do_viral_prompt}=useSelector(store=> store.listStep);
    const [ly_do_viral, setLy_do_viral]=useState(ly_do_viral_prompt);
    const [viralData, setViralData]=useState({
        doi_tuong_kh:'',
        toi_la:''
    });
    const [visible, setVisible]=useState(false)
    useEffect(()=>{
        const newPrompt= Object.keys(viralData).reduce((previousValue, currentKey)=>{
            const newValue=viralData[currentKey];
            const seekRegex = new RegExp(`<span class="font-bold ${currentKey}">.*?<\\/span>`, "g");
            return previousValue.replace(seekRegex,`<span class="font-bold ${currentKey}">${newValue}</span>`)
        },ly_do_viral)
        setLy_do_viral(newPrompt)
    },[viralData])

    return(
        <div className="border-t-2 mt-3">
            <h1 className="text-[20px]">Lý do viral</h1>
            <button className="button-55" onClick={()=>setVisible(true)}>Mở viral</button>
            <ModalViral viralData={viralData} modalIsOpen={visible} closeModal={()=>setVisible(false)} onSubmit={setViralData}/>
            <p className="max-w-[800px]" dangerouslySetInnerHTML={{__html:ly_do_viral}}/>
        </div>
    )
}