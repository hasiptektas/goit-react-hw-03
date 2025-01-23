import { Formik } from 'formik';
import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import initialTasks  from '../PersonList.json'

function ContactForm({onAdd}) {

const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);

return (
<div>
    <Button variant='success' onClick={handleShow}>Kişi Ekle</Button>
    <Modal show={show} onHide={handleClose}>
        <Modal.Dialog>
            <Modal.Header closeButton>
                <Modal.Title>Kişi Ekle</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                
                <Formik 
                    initialValues={{ name: '', number: '' }}
                    validate={values => {
                        const errors = {};
                        if (!values.name) {
                            errors.name = 'Required';
                        }
                        if (!values.number) {
                            errors.number = 'Required';
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
                        <form onSubmit={handleSubmit} style={{display: 'flex', flexDirection: 'column', gap: '10px'}} >
                            <input
                                type='text'
                                name='name'
                                placeholder='Enter a name'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name && errors.name}
                            <input
                                type='number'
                                name='number'
                                placeholder='Enter a number'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.number}
                            />
                            {errors.number && touched.number && errors.number}
                            <button type='submit' disabled={isSubmitting}>
                                Submit
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