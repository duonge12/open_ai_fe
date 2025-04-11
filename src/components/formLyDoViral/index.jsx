import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalViral } from "./modal";
import { handleFetchDoiTuongKH } from "../../redux/doiTuongKH";
import { handleFetchToiLa } from "../../redux/toiLa";
import { isAllDataFilled } from "../../ultilities/handleCheckData";


export const FormLyDoViral=()=>{
    const {ly_do_viral_prompt}=useSelector(store=> store.listStep);
    const {doiTuongKH}=useSelector(store=> store.doiTuongKH);
    const {toiLa}=useSelector(store=> store.toiLa);
    const dispatch=useDispatch()
    const [ly_do_viral, setLy_do_viral]=useState(ly_do_viral_prompt);
    const [viralData, setViralData]=useState({
        doiTuongKH:{
            title:"Đối tượng khách hàng:",
            data:undefined,
            selected:0
        },
        toiLa:{
            title:"Tôi là:",
            data:undefined,
            selected:0
        }
    });
    const [visible, setVisible]=useState(false);

    useEffect(()=>{
        if(isAllDataFilled(viralData)){
            const newPrompt= Object.keys(viralData).reduce((previousValue, currentKey)=>{
                const index=viralData[currentKey].selected;
                const newValue=viralData[currentKey].data[index]
                const seekRegex = new RegExp(`<span class="font-bold ${currentKey}">.*?<\\/span>`, "g");
                return previousValue.replace(seekRegex,`<span class="font-bold ${currentKey}">${newValue}</span>`)
            },ly_do_viral)
            setLy_do_viral(newPrompt)
        }
    },[viralData]);

    useEffect(()=>{
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
        }
        else{
            setViralData({...viralData,doiTuongKH:{...viralData.doiTuongKH,data: doiTuongKH}})
        }
        if(!toiLa){
            dispatch(handleFetchToiLa())
        }
        else{
            setViralData({...viralData,toiLa:{ ...viralData.toiLa,data:toiLa}})
        }
    },[doiTuongKH, toiLa]);

    return(
        <div className="border-t-2 mt-3">
            <h1 className="text-[20px]">Lý do viral</h1>
            <button className="button-55" onClick={()=>setVisible(true)}>Mở viral</button>
            <ModalViral viralData={viralData} setViralData={setViralData} modalIsOpen={visible} closeModal={()=>setVisible(false)} />
            <p className="max-w-[800px]" dangerouslySetInnerHTML={{__html:ly_do_viral}}/>
        </div>
    )
}