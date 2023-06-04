import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Input } from "./Input";
type FormContactProps = {
  name: string;
  email: string;
  message: string;
  subject: string;
};
export const FormContact = () => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
    subject: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string().required("El nombre es requerido"),
    email: Yup.string()
      .email("Ingrese un correo electrónico válido")
      .required("El correo electrónico es requerido"),
    message: Yup.string().required("El mensaje es requerido"),
    subject: Yup.string().required("El asunto es requerido"),
  });
  const handleSubmit = async (values: FormContactProps) => {
    const { name, email, message, subject } = values;
    const data = await fetch('/api/sendEmail',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name, email, message, subject})
    })
    const response = await data.json()
    console.log(response)
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });
  return (
    <form className="mt-6 w-full md:w-1/2" onSubmit={formik.handleSubmit}>
      <Input id="name" type="text" title="Nombre:" formik={formik} />
      <Input id="email" type="email" title="Correo electrónico:" formik={formik} />
      <Input id="subject" type="text" title="Asunto:" formik={formik} />
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium  text-white"
        >
          Comentario:
        </label>
        <textarea
          id="message"
          rows={4}
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-950 border-yellow-600 placeholder-yellow-600 text-white focus:ring-yellow-600 focus:border-yellow-500"
          placeholder="Deje su comentario..."
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-[14px] mt-1 text-red-600">{formik.errors.message}</div>
        ) : null}
      </div>
      <button type="submit" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center bg-yellow-600">
        Enviar
      </button>
    </form>
  );
};
