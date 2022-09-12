import {useFormik} from 'formik';
import React, {useRef} from 'react';
import style from "./Form.module.css";
import emailjs from '@emailjs/browser';

export type FormikPropsType = {
    email?: string
    name?: string
    messageText?: string
}

export const Form = () => {

    const form = useRef<any>();
    const sendEmail = (e: any) => {
        emailjs.sendForm('service_r1fmaxl', 'template_el5y5b7', form.current, 'NxVkFaViPeJ9uKWxJ')
            .then((result) => {
                console.log(result.text);
            }).catch((error) => {
            console.log(error.text);
        });
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            messageText: ''
        },
        validate: (values) => {
            const errors: FormikPropsType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (values.name.length < 1) {
                errors.name = 'Name should be at list two symbols '
            }
            if (values.messageText.length < 1) {
                errors.messageText = 'message should be at list two symbols '
            }
            return errors;
        },
        onSubmit: values => {
            sendEmail({
                name: values.name.trim(),
                email: values.email.trim(),
                messageText: values.messageText
            })
            formik.resetForm()
        },
    });

    return (
        <div>
            <form className={style.form} ref={form} onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    type="text"
                    placeholder={'email'}
                    {...formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ?
                    <div style={{color: 'red'}}>{formik.errors.email}</div> : null}
                <input
                    id="name"
                    type="text"
                    placeholder={"name"}
                    {...formik.getFieldProps('name')}
                />
                {formik.touched.email && formik.errors.name ?
                    <div style={{color: 'red'}}>{formik.errors.name}</div> : null}
                <textarea
                    id="messageText"

                    {...formik.getFieldProps('messageText')}
                />
                {formik.touched.email && formik.errors.messageText ?
                    <div style={{color: 'red'}}>{formik.errors.messageText}</div> : null}
                <button
                    className={style.sendMessage}
                    type={'submit'} value={'Send'}
                >Send Message
                </button>
            </form>

        </div>
    );
};
