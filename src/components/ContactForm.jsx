/* eslint-disable react/prop-types */
import { Formik } from 'formik';
import {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'

function ContactForm({onAdd}) {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<div>
    <Button variant='success' onClick={handleShow}>Kişi Ekle</Button>
    <Modal show={show} onHide={handleClose} centered >
        <Modal.Dialog style={{width: '100%', height: '100%', margin: '0'}}>
            <Modal.Header closeButton>
                <Modal.Title>Kişi Ekle</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <Formik 
                    initialValues={{ name: '', number: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Lütfen Alanı Doldurun';
                        }
                        if (!values.number) {
                            errors.number = 'Lütfen Alanı Doldurun';
                        }
                        return errors;
                    }}
                    onSubmit={(values, { setSubmitting, resetForm}) => {
                            
                            resetForm();
                            const newTask = {
                                id: Date.now(),
                                name: values.name,
                                number: values.number
                              };
                              onAdd(newTask);
                              console.log(values);
                              values.push(newTask); // Yeni görevi diziye ekle
                              setSubmitting(false);
                              resetForm();
                    }}>
                    {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <form onSubmit={handleSubmit} style={{
                                display: 'flex', 
                                flexDirection: 'column', 
                                gap: '20px'}} >
                            <input
                                style={{padding: "5px 10px"}}
                                type='text'
                                name='name'
                                placeholder='İsmi Girin'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <input
                                style={{padding: "5px 10px"}}
                                type='number'
                                name='number'
                                placeholder='Numarayı Girin'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                            />
                            {errors.number && touched.number && errors.number}
                            <button className='btn btn-primary' type='submit' disabled={isSubmitting}>
                                Ekle
                            </button>
                        </form>
                    )}
                    </Formik>
            </Modal.Body>

            <Modal.Footer> 
           
        </Modal.Footer>
        </Modal.Dialog>
    </Modal>

</div>

)
}

export default ContactForm