import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

export const Login = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .required('This input a required!')
      .min(3, 'First name must have at least 3 elements!'),
    last_name: Yup.string()
      .required('This input a required!')
      .min(3, 'First name must have at least 3 elements!'),
    email: Yup.string()
      .required('This input a required!')
      .email('Incorrect Email!'),
    password: Yup.string()
      .required('This input a required!')
      .min(7, 'Password must consist of at least 7 elements!'),
  });

  const onSubmit = (values) => {
    const navigate = useNavigate()

    navigate('/')
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        background: '#111',
      }}
    >
      <div class="square">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>
        <div class="login">
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div class="inputBx" id="email_box">
                <Field name="email" type="text" placeholder="Email" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div class="inputBx" id="password_box">
                <Field name="password" type="password" placeholder="Password" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="password" />
                </span>
              </div>
              <div class="inputBx">
                <input type="submit" value="Sign Up" />
              </div>
            </Form>
          </Formik>
          <div class="links">
            <Link to="/signup">Signup</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
