import React from "react";

export const FormContact = () => {
  return (
    <form className="mt-6 w-full md:w-1/2">
      <div className="mb-6">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-white"
        >
          Nombre:
        </label>
        <input
          type="text"
          id="name"
          className="border text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 bg-gray-950 border-yellow-600 placeholder-yellow-600 text-white"
          placeholder="Su nombre"
          required
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-white"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="border text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 bg-gray-950 border-yellow-600 placeholder-yellow-600 text-white"
          required
          placeholder="example@gmail.com"
        />
      </div>
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
          className="block p-2.5 w-full text-sm rounded-lg border bg-gray-950 border-yellow-600 placeholder-yellow-600 text-white focus:ring-yellow-600 focus:border-yellow-500"
          placeholder="Deje su comentario..."
        ></textarea>
      </div>
      <button
        type="submit"
        className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center bg-yellow-600"
      >
        Enviar
      </button>
    </form>
  );
};
