import { Link } from "react-router-dom";
import { generalServices } from "../constants/data";
import ServiceList from "../components/ServiceList";
import SpecialtiesList from "../components/SpecialtiesList";
import React, { useState, useEffect } from "react";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";

export default function Services() {
  const { form, cambiar } = HelperForm({});
  const [studies, setStudies] = useState([]);

  const agregarEstudio = async (e) => {
    e.preventDefault();
    let nuevoPerfil = form;
    try {
      const request = await fetch(Global.url + "/estudio/registrar", {
        method: "POST",
        body: JSON.stringify(nuevoPerfil),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const dataCons = await request.json();

      // Actualizar la lista de estudios después de agregar uno nuevo
      const response = await fetch(Global.url + "/estudio/listar");
      const data = await response.json();
      setStudies(data.resultado); // Actualizar la lista de estudios con los nuevos datos
    } catch (error) {
      console.error("Error adding new study: ", error);
    }
  };

  return (
    <>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">Agregar Estudio</h2>
        {/* <ServiceList services={generalServices} /> */}
        <form onSubmit={agregarEstudio} className="w-[100%] flex flex-col flex-nowrap items-center gap-7">
          <label className="max-w-[30em] w-[100%]">
            Tipo
            <input
              type="text"
              id="tipo"
              name="tipo"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
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
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Fecha Fin
            <input
              type="Date"
              id="fechaFin"
              name="fechaFin"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Notas
            <input
              type="text"
              id="notas"
              name="notas"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
              onChange={cambiar}
            />
          </label>
          <div className="flex justify-center max-w-[30em] w-[100%]">
            <button type="submit" className="mt-8 glassy-icon px-6 m-7">
              Agregar
            </button>
            <button type="reset" className="mt-8 glassy-icon px-6 m-7">
              Cancelar
            </button>
          </div>
        </form>
      </section>

      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">Estudios</h2>
        <SpecialtiesList studies={studies} setStudies={setStudies} />
      </section>
    </>
  );
}
