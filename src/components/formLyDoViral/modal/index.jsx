import { Form, Formik  } from 'formik';
import Modal from 'react-modal';
import { useEffect } from 'react';
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
                            console.log(values)
                            const title=values[key].title;
                            const data=values[key].data;
                            const selected=values[key].selected;
                            return(
                                <>
                                    <h1>{title}</h1>
                                    <Dropdown 
                                        items={data} 
                                        name={`${key}.selected`} 
                                        value={selected}
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