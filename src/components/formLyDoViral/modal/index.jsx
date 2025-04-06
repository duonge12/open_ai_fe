import { Form, Formik } from 'formik';
import { useEffect } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { handleFetchDoiTuongKH } from '../../../redux/doiTuongKH';
import { Dropdown } from '../../dropdown';
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
    const dispatch=useDispatch();
    const {doiTuongKH}=useSelector(store=> store.doiTuongKH);
    useEffect(()=>{
        if(!doiTuongKH){
            dispatch(handleFetchDoiTuongKH())
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
                        <Dropdown items={viralData.doi_tuong_kh} onSelect={setViralData}/>
                        <button type='button' onClick={closeModal}>Đóng</button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    )
}