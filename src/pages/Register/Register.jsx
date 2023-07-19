import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useMutation } from 'react-query';
import { API } from '../../API/api';
import { useContext } from 'react';
import { RegisterContext } from '../../context/RegisterContext';

export const Register = () => {
  const { setToken } = useContext(RegisterContext);
  const navigate = useNavigate();
  
  document.body.classList.add('p-0');
  
  const initialValues = {
    firstName: '',
    lastName: '',
    phoneNumber: '',
    region: '',
    email: '',
    passwordHash: '',
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required('This input a required!')
      .min(3, 'First name must have at least 3 elements!'),
    lastName: Yup.string()
      .required('This input a required!')
      .min(5, 'First name must have at least 5 elements!'),
    region: Yup.string()
      .required('This input a required!')
      .min(3, 'Region a must have at least 3 elements!'),
    phoneNumber: Yup.string()
      .required('This input a required!')
      .min(13, 'Phone number must start with +998!')
      .max(13, 'Phone number should not exceed 13 elements at most'),
    email: Yup.string()
      .required('This input a required!')
      .email('Incorrect email!'),
    passwordHash: Yup.string()
      .required('This input a required!')
      .min(8, 'Password must consist of at least 8 elements!'),
  });

  const { mutate } = useMutation('signup-users', API.signUp, {
    onSuccess: (data) => {
      if (data.data) {
        setToken(data.data);

        navigate('/');
      }
    },
  });

  // if(isLoading) {
  //   return <h1>Loading...</h1>
  // }

  const onSubmit = (values) => {
    const formData = new FormData();

    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('phoneNumber', values.phoneNumber);
    formData.append('region', values.region);
    formData.append('passwordHash', values.passwordHash);

    mutate(formData);
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
                <Field name="firstName" type="text" placeholder="First name" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="firstName" />
                </span>
              </div>
              <div className="inputBx" id="name_box">
                <Field name="lastName" type="text" placeholder="Last name" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="lastName" />
                </span>
              </div>
              <div className="inputBx" id="name_box">
                <Field
                  name="phoneNumber"
                  type="text"
                  placeholder="Phone number"
                />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="phoneNumber" />
                </span>
              </div>
              <div className="inputBx" id="name_box">
                <Field
                  name="region"
                  type="text"
                  placeholder="region. example: (Toshkent, Olmaliq)"
                />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="region" />
                </span>
              </div>
              <div className="inputBx" id="email_box">
                <Field name="email" type="email" placeholder="email" />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="email" />
                </span>
              </div>
              <div className="inputBx" id="password_box">
                <Field
                  name="passwordHash"
                  type="password"
                  placeholder="Password"
                />
                <span className="text-danger ms-2 fw-semibold">
                  <ErrorMessage name="passwordHash" />
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
