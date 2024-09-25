"use client";
import { useState, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const recaptchaRef = useRef(null); // Ref para el reCAPTCHA

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Nombre completo es obligatorio"),
    email: Yup.string()
      .email("Correo no válido")
      .required("Correo es obligatorio"),
    message: Yup.string()
      .min(10, "Mensaje debe tener al menos 10 caracteres")
      .required("Mensaje es obligatorio"),
    companyAddress: Yup.string().required(
      "Dirección de la empresa es obligatoria"
    ),
    companyPhone: Yup.string().required(
      "Teléfono de la empresa es obligatorio"
    ),
    companyEmail: Yup.string()
      .email("Correo no válido")
      .required("Correo de la empresa es obligatorio"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    if (!captchaVerified) {
      toast.error("Por favor, verifica el reCAPTCHA");
      return;
    }
    try {
      const body = {
        full_name: values.fullName,
        email: values.email,
        message: values.message,
        company_address: values.companyAddress,
        company_phone: values.companyPhone,
        company_email: values.companyEmail,
      };
      const response = await fetch("http://127.0.0.1:8000/submit-form/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(body),
      });

      const result = await response.json();
      console.log("Success:", result);
      if (result?.status) {
        toast.success(result.message);
        resetForm();
        recaptchaRef.current.reset();
        setCaptchaVerified(false);
      } else {
        toast.error(
          "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
        );
      }
      // Puedes agregar un mensaje de éxito aquí
    } catch (error) {
      console.error("Error:", error);
      toast.error(
        "Hubo un problema al enviar el formulario. Por favor, inténtalo de nuevo."
      );
    }
  };

  const onCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaVerified(!!value);
  };

  return (
    <section id="contact" className="contact__form">
      <Image
        src="/images/banner-form.png"
        alt="Banner Form"
        width={1727}
        height={576}
        title="Banner Form"
        className="contact__form--background"
      ></Image>
      <div className="container contact__form--container">
        <h2 className="contact__form--title">
          ¡Cumple tus metas con nosotros!
        </h2>
        <div className="contact__form--content">
          <Formik
            initialValues={{
              fullName: "",
              email: "",
              message: "",
              companyAddress: "",
              companyPhone: "",
              companyEmail: "",
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form className="contact__form--form">
                <div className="contact__form--column">
                  <label className="contact__form--label">
                    Nombre Completo
                  </label>
                  <Field
                    className={`contact__form--input ${
                      touched.fullName && errors.fullName ? "input--error" : ""
                    }`}
                    type="text"
                    name="fullName"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="fullName"
                    component="div"
                  />
                </div>

                <div className="contact__form--column">
                  <label className="contact__form--label">
                    Correo Electrónico
                  </label>
                  <Field
                    className={`contact__form--input ${
                      touched.email && errors.email ? "input--error" : ""
                    }`}
                    type="email"
                    name="email"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="email"
                    component="div"
                  />
                </div>

                <div className="contact__form--column">
                  <label className="contact__form--label">Mensaje</label>
                  <Field
                    className={`contact__form--textarea ${
                      touched.message && errors.message ? "input--error" : ""
                    }`}
                    as="textarea"
                    name="message"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="message"
                    component="div"
                  />
                </div>

                <div className="contact__form--column">
                  <label className="contact__form--label">
                    Dirección de la Empresa
                  </label>
                  <Field
                    className={`contact__form--input ${
                      touched.companyAddress && errors.companyAddress
                        ? "input--error"
                        : ""
                    }`}
                    type="text"
                    name="companyAddress"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="companyAddress"
                    component="div"
                  />
                </div>

                <div className="contact__form--column">
                  <label className="contact__form--label">
                    Teléfono de la Empresa
                  </label>
                  <Field
                    className={`contact__form--input ${
                      touched.companyPhone && errors.companyPhone
                        ? "input--error"
                        : ""
                    }`}
                    type="text"
                    name="companyPhone"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="companyPhone"
                    component="div"
                  />
                </div>

                <div className="contact__form--column">
                  <label className="contact__form--label">
                    Correo Electrónico de la Empresa
                  </label>
                  <Field
                    className={`contact__form--input ${
                      touched.companyEmail && errors.companyEmail
                        ? "input--error"
                        : ""
                    }`}
                    type="email"
                    name="companyEmail"
                  />
                  <ErrorMessage
                    className="contact__form--error"
                    name="companyEmail"
                    component="div"
                  />
                </div>

                {/* Google ReCAPTCHA */}
                <ReCAPTCHA
                  ref={recaptchaRef}
                  sitekey="6LeoST8jAAAAAAZGHRgugTsM0I2mCAsS9hmvfUbq"
                  onChange={onCaptchaChange}
                />

                <button
                  className="button__primary"
                  type="submit"
                  disabled={isSubmitting}
                >
                  Enviar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}
