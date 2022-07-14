import React, { useState } from 'react'
import * as yup from 'yup'
import { useFormik, Form, Formik } from 'formik'
import { NavLink, useHistory } from 'react-router-dom';
import { useEffect } from 'react';

const BookAppointment = (props) => {

    const [update, setUpdate] = useState(false);

    const history = useHistory();

    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
        email: yup.string().email("Please enter valid E-mail.").required("Password is required"),
        phone: yup.number().required("Mobile Number is required"),
        date: yup.date().required("Please select the Date."),
        department: yup.string().required("Please select the Department"),
        message: yup.string().required("Please enter Some Message."),
    });

    const insertData = (values) => {
        let id = Math.floor(Math.random() * 1000)
        values = {
            id,
            ...values
        }

        let localData = JSON.parse(localStorage.getItem("apt"));

        if (localData === null) {
            localStorage.setItem("apt", JSON.stringify([values]))
        } else {
            localData.push(values);
            localStorage.setItem("apt", JSON.stringify(localData))
        }

        history.push("/list_apt")

        formik.resetForm();

    }

    const handleUpdate = (values) => {
        let localData = JSON.parse(localStorage.getItem('apt'));

        let upData = localData.map((d) => {
            if (d.id === values.id) {
                return values;
            }else{
                return d;
            }
        })

        localStorage.setItem('apt' , JSON.stringify(upData));

        history.goBack();
        setUpdate(false);
    }

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            department: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            update ? handleUpdate(values) : insertData(values);
        }
    })

    useEffect(() => {
        if (props.location.state) {
            setUpdate(true);

            let localData = JSON.parse(localStorage.getItem('apt'));
            let fData = localData.filter((fd) => fd.id === props.location.state.id)
            // console.log(props.location.state.id , fData);

            formik.setValues(fData[0]);

        }
    }, [])

    const { handleBlur, handleChange, handleSubmit, errors, touched , values } = formik;

    return (
        <>
            <main>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>{update ? 'Update an Appointment' : 'Book an Appointment'}</h2>
                            <div className="row">
                                <div className="col-6">
                                    <NavLink to="/book_apt">Book Appointment</NavLink>
                                </div>
                                <div className="col-6">
                                    <NavLink to="/list_apt">List Appointment</NavLink>
                                </div>
                            </div>
                        </div>
                        <Formik values={formik}>
                            <Form method="post" onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input
                                            type="text"
                                            name="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Your Name"
                                            value={values.name || ''}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.name && touched.name ? <p>{errors.name}</p> : null}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="email"
                                            className="form-control"
                                            name="email"
                                            id="email"
                                            placeholder="Your Email"
                                            value={values.email || ''}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.email && touched.email ? <p>{errors.email}</p> : null}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input
                                            type="tel"
                                            className="form-control"
                                            name="phone"
                                            id="phone"
                                            placeholder="Your Phone"
                                            value={values.phone || ''}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.phone && touched.phone ? <p >{errors.phone}</p> : null}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input
                                            type="date"
                                            name="date"
                                            className="form-control datepicker"
                                            id="date"
                                            placeholder="Appointment Date"
                                            value={values.date || ''}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {errors.date && touched.date ? <p>{errors.date}</p> : null}
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select
                                            name="department"
                                            id="department"
                                            className="form-select"
                                            value={values.department || ''}
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        >
                                            <option value>Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        {errors.department && touched.department ? <p>{errors.department}</p> : null}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea
                                        className="form-control"
                                        name="message"
                                        rows={5}
                                        placeholder="Message (Optional)"
                                        value={values.message || ''}
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                    />
                                    {errors.message && touched.message ? <p>{errors.message}</p> : null}
                                </div>

                                <div className="text-center"><button type="submit">{update ? 'Update an Appointment' : 'Book an Appointment'}</button></div>
                            </Form>

                        </Formik>
                    </div>
                </section>
            </main>

        </>
    )
}

export default BookAppointment
