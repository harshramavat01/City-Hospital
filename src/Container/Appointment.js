import React from 'react'
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import { NavLink } from 'react-router-dom';

const Appointment = () => {

    const schemaObj = {
        name: yup.string().required("Please Enter Name"),
        email: yup.string().email("Please Enter Valid Email").required("Plaese Enter Email"),
        phone: yup.number().max(10).required("Please Enter Password"),
        date: yup.date("Please Enter Valid Date.").required("Please Enter Date."),
        department: yup.string().required("Please Select Department.")
    }
    let schema = yup.object().shape(schemaObj)

    const initialValue = {
        name: '',
        email: '',
        phone: '',
        date: '',
        department: ''
    }
    const formik = useFormik({
        initialValues: initialValue,
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
        enableReinitialize: true,
    });

    const { errors, touched, handleSubmit, handleBlur, handleChange, values } = formik

    return (
        <>

            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <NavLink to="/book_apt">Book Appointment</NavLink>
                        </div>
                        <div className="col-6">
                            <NavLink to="/list_apt">List Appointment</NavLink>
                        </div>
                    </div>
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"
                                        onChange={handleChange} value={values.name || ''} onBlur={handleBlur} />
                                    {errors.name && touched.name ? (
                                        <div className="validate">{errors.name}</div>
                                    ) : null}
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"
                                        onChange={handleChange} value={values.email || ''} onBlur={handleBlur} />
                                    {errors.email && touched.email ? (
                                        <div className="validate">{errors.email}</div>
                                    ) : null}
                                </div>
                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone"
                                        onChange={handleChange} value={values.phone || ''} onBlur={handleBlur} />
                                    {errors.phone && touched.phone ? (
                                        <div className="validate">{errors.phone}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"
                                        onChange={handleChange} value={values.date || ''} onBlur={handleBlur} />
                                    {errors.date && touched.date ? (
                                        <div className="validate">{errors.date}</div>
                                    ) : null}
                                </div>
                                <div className="col-md-4 form-group mt-3">
                                    <select name="department" id="department" className="form-select"
                                        onChange={handleChange} value={values.department || ''} onBlur={handleBlur}>
                                        <option value>Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                    {errors.department && touched.department ? (
                                        <div className="validate">{errors.department}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" />
                                <div className="validate" />
                            </div>
                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            <div className="text-center"><button type="submit">Make an Appointment</button></div>
                        </Form>
                    </Formik>
                </div>
            </section>


        </>
    )
}

export default Appointment
