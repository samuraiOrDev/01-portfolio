import React, { FC } from "react";

interface Props {
  id: string;
  title: string;
  type: string;
  formik: any;
}
export const Input: FC<Props> = ({ id, type, title, formik }) => {
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block mb-2 text-sm font-medium text-white">
        {title}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[`${id}`]}
        className="border text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 bg-gray-950 border-yellow-600 placeholder-yellow-600 text-white"
        placeholder="Su nombre"
      />
      {formik.touched[`${id}`] && formik.errors[`${id}`] ? (
        <div className="text-[14px] mt-1 text-red-600">
          {formik.errors[`${id}`]}
        </div>
      ) : null}
    </div>
  );
};
