import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalViral } from "./modal";
import { handleFetchDoiTuongKH } from "../../redux/doiTuongKH";


export const FormLyDoViral=()=>{
    const {ly_do_viral_prompt}=useSelector(store=> store.listStep);
    const {doiTuongKH, title}=useSelector(store=> store.doiTuongKH);
    const dispatch=useDispatch()
    const [ly_do_viral, setLy_do_viral]=useState(ly_do_viral_prompt);
    const [viralData, setViralData]=useState({
        doiTuongKH:{
            title:title,
            selected:0
        }
    });
    const [visible, setVisible]=useState(false);

    useEffect(()=>{
        if(doiTuongKH){
            const newPrompt= Object.keys(viralData).reduce((previousValue, currentKey)=>{
                const index=viralData[currentKey].selected;
                const newValue=doiTuongKH[index];
                const seekRegex = new RegExp(`<span class="font-bold ${currentKey}">.*?<\\/span>`, "g");
                return previousValue.replace(seekRegex,`<span class="font-bold ${currentKey}">${newValue}</span>`)
            },ly_do_viral)
            setLy_do_viral(newPrompt)
        }
    },[viralData, doiTuongKH]);

    useEffect(()=>{
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
        }
    },[doiTuongKH]);

    return(
        <div className="border-t-2 mt-3">
            <h1 className="text-[20px]">Lý do viral</h1>
            <button className="button-55" onClick={()=>setVisible(true)}>Mở viral</button>
            <ModalViral viralData={viralData} setViralData={setViralData} modalIsOpen={visible} closeModal={()=>setVisible(false)} />
            <p className="max-w-[800px]" dangerouslySetInnerHTML={{__html:ly_do_viral}}/>
        </div>
    )
}