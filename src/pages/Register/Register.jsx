import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useMutation, useQuery } from 'react-query';
import axios from 'axios';
import { API } from '../../API/api';

export const Register = () => {
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

  const { mutate } = useMutation('signup-users', API.signUp, {
    onSuccess: (date) => {
      console.log(date);
    },
  });

  // if(isLoading) {
  //   return <h1>Loading...</h1>
  // }

  const onSubmit = (values) => {
    mutate(values);
    // axios
    //   .post('http://localhost:5227/api/users', values)
    //   .then((data) => console.log(data))
    //   .catch((err) => console.log(err));
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
      <div className="square">
        <i style={{ '--clr': '#00ff0a' }}></i>
        <i style={{ '--clr': '#ff0057' }}></i>
        <i style={{ '--clr': '#fffd44' }}></i>

        <div className="login">
          <h2>SIGN UP</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
              <div className="inputBx" id="name_box">
                <Field name="first_name" type="text" placeholder="First name" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="first_name" />
                </span>
              </div>
              <div className="inputBx" id="name_box">
                <Field name="last_name" type="text" placeholder="Last name" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="last_name" />
                </span>
              </div>
              <div className="inputBx" id="email_box">
                <Field name="email" type="text" placeholder="Email" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div className="inputBx" id="password_box">
                <Field name="password" type="password" placeholder="Password" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="password" />
                </span>
              </div>
              <div className="inputBx">
                <input type="submit" value="Sign Up" />
              </div>
            </Form>
          </Formik>
          <div className="links">
            <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
