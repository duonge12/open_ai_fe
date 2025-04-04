import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import Modal from 'react-modal';
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
    },
};

Modal.setAppElement('#root');

export const ModalViral=({viralData, modalIsOpen, closeModal})=>{
    const dispatch=useDispatch();
    const {doiTuongKH}=useSelector(store=> store.doiTuongKH);
    useEffect(()=>{
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
        }
        if(doiTuongKH){
            setLy_do_viral_props({...ly_do_viral_props,__doi_tuong_kh__:doiTuongKH[0]})
        }
    },[doiTuongKH])
    return(
        <div>
            <Modal
                isOpen={modalIsOpen}
                style={customStyles}
            >
                <Formik
                >
                    <Form>
                        <h1>Viral</h1>
                        <button type='button' onClick={closeModal}>Đóng</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}