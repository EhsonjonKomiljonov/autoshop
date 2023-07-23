import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useContext } from 'react';
import { useMutation } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { API } from '../../API/api';
import { RegisterContext } from '../../context/RegisterContext';
import { UserContext } from '../../context/UserContext';

export const Login = () => {
  const { setUserData } = useContext(UserContext);
  const { setToken } = useContext(RegisterContext);
  const navigate = useNavigate();
  document.body.classList.add('p-0');

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .required('This input a required!')
      .email('Incorrect Email!'),
    password: Yup.string()
      .required('This input a required!')
      .matches(
        /[0-9]/,
        'A number must be used even if there is one in the password!'
      )
      .matches(
        /[a-z]/,
        'Even if there is one in the password, a lowercase letter must be written!'
      )
      .matches(
        /[A-Z]/,
        'Even if there is one in the password, a uppercase letter must be written!'
      )
      .matches(
        /(?=.*[@#$%^&+=])/,
        'A symbol must be written even if there is one in the password!'
      )
      .min(8, 'Password must consist of at least 8 elements!'),
  });

  const { mutate } = useMutation('login-user', API.login, {
    onSuccess: (data) => {
      if (data.data) {
        setToken(true);
        setUserData(data.data);

        navigate('/');
      }
    },
    onError: (err) => console.log(err),
  });

  const onSubmit = (values) => {
    mutate(values);
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
          <h2>Login</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            <Form>
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
            <Link to="/signup">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
