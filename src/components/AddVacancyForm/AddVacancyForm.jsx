import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useRef, useState } from 'react';
import './add-vacancy-form.scss';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useMutation } from 'react-query';
import { API } from '../../API/api';

export const AddVacancyForm = () => {
  const [fileName, setFileName] = useState('');
  const fileUploadRef = useRef();

  document.body.classList.add('p-0');

  const initialValues = {
    category: '',
    name: '',
    car_color: '',
    type: '',
    transmission: '',
    made_at: '',
    price: '',
    description: '',
    probeg: '',
  };

  const { mutate } = useMutation('add-vacancy', API.addVacancy, {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      console.log(err)
    }
  });

  const onSubmit = (val) => {
    mutate(val);
  };

  const validationSchema = Yup.object({
    category: Yup.string()
      .required('Mashina markasini kiritish majburiy!')
      .min(2, "Mashina markasi eng kami 3ta harf bo'lishi mumkin!"),
    name: Yup.string()
      .required('Mashina nomini kiritish majburiy!')
      .min(2, "Mashina nomi eng kami 3ta harf bo'lishi mumkin!"),
    car_color: Yup.string()
      .required('Mashina rangini kiritish majburiy!')
      .min(2, "Mashina rangi eng kami 3ta harf bo'lishi mumkin!"),
    type: Yup.string()
      .required('Mashina tipini kiritish majburiy!')
      .min(2, "Mashina tipi eng kami 3ta harf bo'lishi mumkin!"),
    transmission: Yup.string()
      .required('Mashinani uzatish qutisini kiritish majburiy!')
      .min(2, "Mashina uzatish qutisi eng kami 3ta harf bo'lishi mumkin!")
      .max(8, "Mashina uzatish qutisi eng ko'pi 8ta harf bo'lishi mumkin!"),
    made_at: Yup.number()
      .required('Mashina yilini kiritish majburiy!')
      .min(1980, "Mashina yili eng kami 1980 yildan katta bo'lishi mumkin!")
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
                  name="car_color"
                  placeholder="Rangini kiriting. misol: (qora)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="car_color" />
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
                  name="transmission"
                  placeholder="Uzatish qutisini kiriting. misol: (avtomat)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="transmission" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="made_at"
                  placeholder="Mashinani ishlab chiqarilgan sanasini kiriting."
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="made_at" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="price"
                  placeholder="Mashinani sotmoqchi bo'lgan narxni kiriting."
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="price" />
                </span>
              </label>
              <label className="w-100">
                <Field
                  name="probeg"
                  placeholder="Mashina yurgan masofani kiriting. (пробег)"
                />
                <span className="text-danger mt-2">
                  <ErrorMessage name="probeg" />
                </span>
              </label>
              <label>
                <Field as="textarea" name="description" placeholder="Izoh...">
                  SS
                </Field>
                <span className="text-danger mt-2">
                  <ErrorMessage name="description" />
                </span>
              </label>
              <button
                className="glow-on-hover mx-auto mt-4"
                style={{ width: '400px' }}
                type="button"
              >
                SEND
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </section>
  );
};
