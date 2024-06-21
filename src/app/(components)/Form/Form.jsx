"use client"
import { useFormik } from 'formik'
import React from 'react'
import { toast } from 'react-toastify'
import * as yup from "yup"
import { AnimatePresence } from 'framer-motion';
import { motion } from 'framer-motion';

const Form = () => {
    const validationSchema = () => {
        const schema = new yup.object({
            title: yup.string("This filed must be string ").min(5, "Min Value in this field is 5").max(50, "Max Value in this field is 50").required("This field is required"),
            body: yup.string("This filed must be string ").min(5, "Min Value in this field is 5").max(200, "Max Value in this field is 200").required("This field is required"),
        })
        return schema
    }
    const my_form = useFormik({
        initialValues: {
            title: "",
            body: "",
        },
        validationSchema,
        onSubmit: (data) => {
            toast.success("Created Post successfully")
        }
    })
    return (
        <>
            <AnimatePresence>
                <motion.form
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    className='' onSubmit={my_form.handleSubmit} >
                    <div className="title my-3">
                        <label className='my-2 fw-bold text-white' htmlFor="title">Title :</label>
                        <input onChange={my_form.handleChange} onBlur={my_form.handleBlur} on type="text" id='title' name='title' placeholder='Title...' className='form-control  placeholder-shown:' />
                        {
                            my_form.errors.title && my_form.touched.title ? <div className="alert alert-danger my-2">{my_form.errors.title}</div> : ""
                        }
                    </div>
                    <div className="body my-4">
                        <label className='my-2 fw-bold text-white' htmlFor="body">Body :</label>
                        <textarea onChange={my_form.handleChange} onBlur={my_form.handleBlur} on rows={8} name='body' placeholder='Body...' id="body" className='form-control resize-none'></textarea>
                        {
                            my_form.errors.body && my_form.touched.body ? <div className="alert alert-danger my-2">{my_form.errors.body}</div> : ""
                        }

                    </div>
                    <button disabled={!(my_form.dirty && my_form.isValid)} type='submit' className={`fromBtn  bg-white text-black fw-bold px-5 py-1 rounded  transition-all`}  >Creates</button>
                </motion.form>
            </AnimatePresence >
        </>
    )
}

export default Form
