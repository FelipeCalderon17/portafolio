import CubeCarousel from "../components/CubeCarousel";
import { dessertImages } from "../constants/data";
import React, { useState, useEffect } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";
export default function About() {
  const { form, cambiar } = HelperForm({});

  const agregarProyecto = async (e) => {
    e.preventDefault();
    let nuevoPerfil = form;
    /* console.log(nuevoPerfil); */
    //guardar en la api
    const request = await fetch(Global.url + "/proyecto/registrar", {
      method: "POST",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataCons = await request.json();
    /* console.log(dataCons); */
    cambiar({});
  };
  return (
    <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
      <h2 className="text-center">Agregar Proyecto</h2>
      {/* <ServiceList services={generalServices} /> */}
      <form
        onSubmit={agregarProyecto}
        className="w-[100%] flex flex-col flex-nowrap items-center gap-7"
      >
        <label className="max-w-[30em] w-[100%]">
          Imagen
          <input
            type="file"
            id="imagen"
            name="imagen"
            className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
            placeholder=""
          />
        </label>
        <label className="max-w-[30em] w-[100%]">
          Nombre
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
            placeholder=""
            onChange={cambiar}
            required
          />
        </label>
        <label className="max-w-[30em] w-[100%]">
          Detalle
          <input
            type="text"
            id="detalle"
            name="detalle"
            className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
            placeholder=""
            onChange={cambiar}
            required
          />
        </label>
        <label className="max-w-[30em] w-[100%]">
          Link
          <input
            type="text"
            id="link"
            name="link"
            className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
            placeholder=""
            onChange={cambiar}
            required
          />
        </label>
        <div className="flex justify-center max-w-[30em] w-[100%]">
          <button type="submit" className="mt-8 glassy-icon px-6 m-7">
            Crear
          </button>
          <button type="reset" className="mt-8 glassy-icon px-6 m-7">
            Cancelar
          </button>
        </div>
      </form>
    </section>
  );
}
