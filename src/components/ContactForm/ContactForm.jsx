import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import s from './ContactForm.module.css';
import * as Yup from 'yup';


    
const ContactForm = ({ handleAddContact }) => {

    const onlyLetters = /^[A-Za-zА-Яа-яЄєІіЇїҐґ-\s]+$/;
    const onlyNumbers = /^[0-9]+$/;
    
    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required')
            .matches(onlyLetters, 'Only letters'),
        number: Yup.string()
            .min(3, 'Min 3 letters')
            .max(89, 'Max 89 numbers')
            .required('Required').matches(onlyNumbers, 'Only numbers')
    })
    

    const initialValues = {
        name: '',
        number: '',
    };

    const handleSubmit = (values, actions) => {
        handleAddContact(values.name, values.number);
        actions.resetForm();
    };


    return (
        <section className={s.container}>
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
             >
                <Form className={s.form}>
                    <div className={s.box}>
                        <label>Name</label>
                        <Field className={s.input} name="name"></Field>
                        <ErrorMessage className={s.error} component='p' name="name"/> 
                    </div>
                    <div className={s.box}>
                        <label>Number</label>
                        <Field className={s.input} name="number"></Field>
                        <ErrorMessage className={s.error} component='p' name="number"/>
                    </div>
                    <button className={s.button} type='submit'>Add contact</button>
                </Form>
            </Formik>
        </section>
    );
}

export default ContactForm;