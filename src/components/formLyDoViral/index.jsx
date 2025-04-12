import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { ModalViral } from "./modal";
import { handleFetchDoiTuongKH } from "../../redux/doiTuongKH";
import { handleFetchToiLa } from "../../redux/toiLa";
import { isAllDataFilled } from "../../ultilities/handleCheckData";
import { handleFetchNgonNgu } from "../../redux/ngonNgu";


export const FormLyDoViral=({title, data, prompt})=>{
    const {ly_do_viral_prompt}=useSelector(store=> store.listStep);
    const {doiTuongKH}=useSelector(store=> store.doiTuongKH);
    const {ngonNgu}=useSelector(store=> store.ngonNgu);
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
            title:"Tôi là :",
            data:undefined,
            selected:0
        },
        ngonNguDich:{
            title:"Ngôn ngữ dịch :",
            data:undefined,
            selected:0
        },
        ngonNguChuyenNganh:{
            title:"Ngôn ngữ chuyên ngành :",
            data:undefined,
            selected:0
        },
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
        let newViralData={...viralData};
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
        }
        else{
            newViralData={...newViralData,
                doiTuongKH:{...newViralData.doiTuongKH,data: doiTuongKH}
            }
        }
        if(!toiLa){
            dispatch(handleFetchToiLa())
        }
        else{
            newViralData={...newViralData,
                toiLa:{...newViralData.toiLa,data: toiLa}
            }
        }
        if(!ngonNgu){
            dispatch(handleFetchNgonNgu())
        }
        else{
            newViralData={...newViralData,
                ngonNguDich:{...newViralData.ngonNguDich,data: ngonNgu},
                ngonNguChuyenNganh:{...newViralData.ngonNguChuyenNganh,data: ngonNgu},
            }
        }
        setViralData({...newViralData})
    },[doiTuongKH, toiLa, ngonNgu]);

    return(
        <div className="border-t-2 mt-3 pl-2">
            <h1 className="text-[20px]">{title}</h1>
            <button className="button-55" onClick={()=>setVisible(true)}>Mở viral</button>
            <ModalViral viralData={viralData} setViralData={setViralData} modalIsOpen={visible} closeModal={()=>setVisible(false)} />
            <p className="max-w-[800px] p-2 bg-black text-white my-3" dangerouslySetInnerHTML={{__html:ly_do_viral}}/>
        </div>
    )
}