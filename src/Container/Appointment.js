import React from 'react'
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';

const Appointment = () => {
  let schema = yup.object().shape({
    name: yup.string().required("Please Enter Name"),
    email: yup.string().email("Please Enter Valid Email").required("Please Enter Email"),
    phone: yup.string().required("Please Enter Phone Number").matches(/^[1-9]\d{9}$/, 'Phone Number must be 10 Digits'),
    date: yup.string().required("Please Select Date & Time"),
    department: yup.string().required("Please Select Department"),
    doctor: yup.string().required("Please Select Doctor"),
    message: yup.string()
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      doctor: '',
      message: '',
    },
    validationSchema: schema,
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const { handleSubmit, handleBlur, handleChange, handleReset, values, errors, touched } = formik

  return (
    <>
      <section id="appointment" className="appointment section-bg">
        <div className="container">
          <div className="section-title">
            <h2>Make an Appointment</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>
          <Formik values={formik}>
            <Form className="php-email-form" onSubmit={handleSubmit} onReset={handleReset}>
              <div className="row">
                <div className="col-md-4 form-group">
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" onChange={handleChange} value={values.name} onBlur={handleBlur} />
                  {errors.name && touched.name ? (
                    <div className="validate">{errors.name}</div>
                  ) : null}
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="text" className="form-control" name="email" id="email" placeholder="Your Email" onChange={handleChange} value={values.email} onBlur={handleBlur} />
                  {errors.email && touched.email ? (
                    <div className="validate">{errors.email}</div>
                  ) : null}
                </div>
                <div className="col-md-4 form-group mt-3 mt-md-0">
                  <input type="text" className="form-control" name="phone" id="phone" placeholder="Your Phone" onChange={handleChange} value={values.phone} onBlur={handleBlur} />
                  {errors.phone && touched.phone ? (
                    <div className="validate">{errors.phone}</div>
                  ) : null}
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 form-group mt-3">
                  <input type="datetime-local" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" onChange={handleChange} value={values.date} onBlur={handleBlur} />
                  {errors.date && touched.date ? (
                    <div className="validate">{errors.date}</div>
                  ) : null}
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select name="department" id="department" className="form-select" onChange={handleChange} value={values.department} onBlur={handleBlur}>
                    <option>Select Department</option>
                    <option value="Department 1">Department 1</option>
                    <option value="Department 2">Department 2</option>
                    <option value="Department 3">Department 3</option>
                  </select>
                  {errors.department && touched.department ? (
                    <div className="validate">{errors.department}</div>
                  ) : null}
                </div>
                <div className="col-md-4 form-group mt-3">
                  <select name="doctor" id="doctor" className="form-select" onChange={handleChange} value={values.doctor} onBlur={handleBlur}>
                    <option>Select Doctor</option>
                    <option value="Doctor 1">Doctor 1</option>
                    <option value="Doctor 2">Doctor 2</option>
                    <option value="Doctor 3">Doctor 3</option>
                  </select>
                  {errors.doctor && touched.doctor ? (
                    <div className="validate">{errors.doctor}</div>
                  ) : null}
                </div>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" onChange={handleChange} value={values.message} onBlur={handleBlur} />
                <div className="validate" />
              </div>
              <div className="mb-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
              </div>
              <div className="text-center">
                <button type="submit">Make an Appointment</button>
                <button type="reset">Reset</button>
              </div>
            </Form>
          </Formik>
        </div>
      </section>
    </>
  )
}

export default Appointment