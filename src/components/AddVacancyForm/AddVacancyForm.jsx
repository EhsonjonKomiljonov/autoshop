import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import './add-vacancy-form.scss';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { useMutation } from 'react-query';
import { API } from '../../API/api';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddVacancyForm = () => {
  document.body.classList.remove('p-0'); 
  const [fileName, setFileName] = useState('');
  const fileUploadRef = useRef();
  const navigate = useNavigate();

  document.body.classList.add('p-0');

  const initialValues = {
    category: '',
    name: '',
    color: '',
    type: '',
    transmissionIsAutomatic: '',
    madeAt: '',
    price: '',
    description: '',
    probeg: '',
  };

  const validationSchema = Yup.object({
    category: Yup.string()
      .required('Mashina markasini kiritish majburiy!')
      .min(2, "Mashina markasi eng kami 3ta harf bo'lishi mumkin!"),
    name: Yup.string()
      .required('Mashina nomini kiritish majburiy!')
      .min(2, "Mashina nomi eng kami 3ta harf bo'lishi mumkin!"),
    color: Yup.string()
      .required('Mashina rangini kiritish majburiy!')
      .min(2, "Mashina rangi eng kami 3ta harf bo'lishi mumkin!"),
    type: Yup.string()
      .required('Mashina tipini kiritish majburiy!')
      .min(2, "Mashina tipi eng kami 3ta harf bo'lishi mumkin!"),
    transmissionIsAutomatic: Yup.string()
      .required('Mashinani uzatish qutisini kiritish majburiy!')
      .min(2, "Mashina uzatish qutisi eng kami 3ta harf bo'lishi mumkin!")
      .max(8, "Mashina uzatish qutisi eng ko'pi 8ta harf bo'lishi mumkin!"),
    madeAt: Yup.number()
      .required('Mashina yilini kiritish majburiy!')
      .min(1990, "Mashina yili eng kami 1990 yildan katta bo'lishi mumkin!")
      .max(2023, "Mashina yili eng ko'pi 2023 yildan kichik bo'lishi mumkin!"),
    price: Yup.number()
      .required('Mashina narxini kiritish majburiy!')
      .min(100, "Mashina narxi eng kami 100$ ko'p bo'lishi mumkin!")
      .max(5000000, "Mashina narxi eng ko'pi 5.000.000$ kam bo'lishi mumkin!"),
    description: Yup.string().required(
      'Mashina xaqida izoh qoldirish majburiy!'
    ),
    probeg: Yup.number()
      .required('Mashina yurgan masofasini kiritish majburiy!')
      .min(
        100,
        "Mashina yurgan masofasi eng kami 100km dan ko'p bo'lishi mumkin!"
      ),
  });

  const { mutate } = useMutation('add-vacancy', API.addVacancy, {
    onSuccess: (data) => {
      if (data.data) {
        toast.success('Vakansiya joylandi!');

        setTimeout(() => {
          navigate('/main-vacancys');
        }, 3000);
      }
    },
    onError: (err) => {
      if (err.response.data.errors.ImagePath) {
        toast.error('Mashina rasmini joylang!');
      }
    },
  });

  const onSubmit = (val) => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const formData = new FormData();

    formData.append('category', val.category);
    formData.append('name', val.name);
    formData.append('imagePath', fileUploadRef.current.files[0]);
    formData.append('color', val.color);
    formData.append('type', val.type);
    formData.append('transmissionIsAutomatic', val.transmissionIsAutomatic);
    formData.append('madeAt', val.madeAt);
    formData.append('price', val.price);
    formData.append('description', val.description);
    formData.append('probeg', val.probeg);
    formData.append('manzil', userData[0].region);
    formData.append('userId', userData[0].id);

    mutate(formData);
  };

  return (
    <section className="vacancy">
      <div className="vacancy__inner d-flex justify-content-between">
        <div style={{ height: '100% !important' }} className="bg-dark w-50">
          <div className="bg-dark file">
            <label className="file-upload">
              <input
                required
                className="d-none"
                onChange={(evt) => setFileName(evt.target?.files[0]?.name)}
                ref={fileUploadRef}
                type="file"
              />
              <div className="d-flex flex-column w-100">
                <p className="text-white opacity-60 text-center">
                  Mashina rasmini tanlang.
                </p>
                <p className="text-danger fs-5 opacity-60">{fileName}</p>
              </div>
            </label>
          </div>
        </div>
        <div className="vacancy-right w-50">
          <div className="d-flex justify-content-between">
            <h2 className="text-white mb-4 text-center flex-grow-1 ms-4 ps-5">
              VAKANSIYA JOYLASH
            </h2>
            <Link className=" text-warning" to="/">
              <i className="me-2 fa-solid fa-arrow-left"></i>ORTGA QAYTISH
            </Link>
          </div>
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="d-flex flex-column">
              <label className="w-100">
                <Field
                  placeholder="Mashina markasini tanlang."
                  name="category"
                  list="car_category"
                />
                <datalist name="category" id="car_category">
                  <option>CHEVROLET</option>
                  <option>DAEWOO</option>
                  <option>LEXUS</option>
                  <option>TOYOTA</option>
                  <option>BMW</option>
                  <option>NISSAN</option>
                  <option>AUDI</option>
                  <option>HONDA</option>
                  <option>FORD</option>
                  <option>MERCEDES-BENZ</option>
                  <option>KIA</option>
                  <option>HYUNDAI</option>
                  <option>LADA</option>
                  <option>MAZDA</option>
                  <option>MITSUBISHI</option>
                  <option>RENAULT</option>
                  <option>SKODA</option>
                  <option>VOLKSWEGEN</option>
                  <option>SUBARU</option>
                  <option>TESLA</option>
                  <option>JEEP</option>
                  <option>CADILLAC</option>
                  <option>DODGE</option>
                  <option>ГАЗ</option>
                  <option>PORSCHE</option>
                  <option>OPEL</option>
                  <option>GENESiS</option>
                  <option>DS</option>
                  <option>Ferrari</option>
                  <option>ALFA ROMEO</option>
                  <option>ASTON MARTIN</option>
                </datalist>
                <span className="text-danger mt-2">
                  <ErrorMessage name="category" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="name"
                  placeholder="Nomini kiriting. misol: (gentra)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="name" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="color"
                  placeholder="Rangini kiriting. misol: (qora)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="color" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="type"
                  placeholder="Tipini kiriting. misol: (sedan)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="type" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="transmissionIsAutomatic"
                  placeholder="Uzatish qutisini kiriting. misol: (avtomat)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="transmissionIsAutomatic" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  type="number"
                  name="madeAt"
                  placeholder="Mashinani ishlab chiqarilgan sanasini kiriting."
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="madeAt" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  type="number"
                  name="price"
                  placeholder="Mashinani sotmoqchi bo'lgan narxni kiriting."
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="price" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  type="number"
                  name="probeg"
                  placeholder="Mashina yurgan masofani kiriting. (пробег)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="probeg" />
                </span>
              </label>
              <label>
                <Field
                  as="textarea"
                  name="description"
                  placeholder="Izoh..."
                ></Field>
                <span className="text-danger mt-2">
                  <ErrorMessage name="description" />
                </span>
              </label>
              <button
                className="glow-on-hover mx-auto mt-4"
                style={{ width: '400px' }}
                type="submit"
              >
                SEND
              </button>
            </Form>
          </Formik>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
};
