import { Form, Formik  } from 'formik';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';
import { Dropdown } from '../../dropdown';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchDoiTuongKH } from '../../../redux/doiTuongKH';
const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      height:'500px'
    },
};

Modal.setAppElement('#root');

export const ModalViral=({viralData, setViralData, modalIsOpen, closeModal})=>{
    const {doiTuongKH}=useSelector(store=> store.doiTuongKH);
    const dispatch=useDispatch()
    useEffect(()=>{
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
        }
    },[doiTuongKH]);
    return(
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <Formik
                    initialValues={viralData}
                    onSubmit={(value)=>{
                        setViralData(value);
                        closeModal()
                    }}
                >
                {({values})=>(
                    <Form>
                        <h1>Viral</h1>
                        {Object.keys(values).map(key=>{
                            const title=viralData[key].title;
                            const selected=viralData[key].selected;
                            return(
                                <>
                                    <h1>{title}</h1>
                                    <Dropdown 
                                        items={doiTuongKH} 
                                        name={`${key}.selected`} 
                                        value={values[key].selected}
                                    />
                                </>
                            )
                        })}
                        <div className='flex gap-3'>
                            <button type='submit'>OK</button>
                            <button type='button' onClick={closeModal}>Đóng</button>
                        </div>
                    </Form>
                )}
                </Formik>
            </Modal>
        </div>
    )
}