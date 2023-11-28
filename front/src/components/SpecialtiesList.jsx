import React, { useState, useEffect } from "react";

import { educations } from "../constants/data";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";

export default function SpecialtiesList() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    cambiar({});
  };
  const [data, setData] = useState({});
  const [idEdit, setIdEdit] = useState(-1); //Esta en -1 para que no muestre la modal directamente

  const { form, cambiar } = HelperForm({});

  const llenarData = (id) => {
    const education = educations.find(
      (edu) => edu.id.toString() === id.toString()
    );

    if (education) {
      const datos = {
        id: education.id,
        tipo: education.tipo,
        detalle: education.detalle,
        notas: education.notas,
      };
      setData(datos);
      openModal();
      cambiar({});
    }
  };

  const editarEstudio = async (e) => {
    e.preventDefault();
    let nuevoPerfil = form;
    /* console.log(nuevoPerfil); */
    //guardar en la api
    const request = await fetch(Global.url + "/estudio/editar/" + idEdit, {
      method: "PUT",
      body: JSON.stringify(nuevoPerfil),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataCons = await request.json();
    /* console.log(dataCons); */
  };

  useEffect(() => {
    // Llama a llenarData solo cuando cambie el ID
    llenarData(idEdit);
  }, [idEdit]);
  return (
    <div className="w-[100%] grid justify-items-center items-stretch justify-center gap-10 sm:gap-9 md:gap-10 grid-cols-[repeat(auto-fit,minmax(250px,250px))] sm:grid-cols-[repeat(auto-fit,minmax(280px,280px))] md:grid-cols-[repeat(auto-fit,minmax(250px,250px))] lg:grid-cols-[repeat(auto-fit,minmax(215px,215px))] row-auto">
      {educations.map((education, id) => (
        <>
          <div
            className=" flex flex-col flex-nowrap items-center justify-center gap-7 glassy-screen !w-[350px] !min-h-[300px] !p-5 sm:!w-[250px] sm:!min-h-[200px] sm:!p-4 md:!w-[250px] md:!min-h-[200px] md:!p-5 lg:!w-[250px] lg:!min-h-[200px] lg:!p-7"
            key={id}
          >
            <div className="text-center space-y-8 sm:text-left">
              <div className="space-y-4">
                <p className="text-slate-500  font-medium">
                  <span className="text-white">Tipo de educación:</span>{" "}
                  {education.tipo}
                </p>
                <p className="text-slate-500  font-medium">
                  <span className="text-white">Fecha Fin:</span>{" "}
                  {education.fechaFin.getFullYear()} /{" "}
                  {education.fechaFin.getMonth()}
                </p>
                <p className="text-slate-500  font-medium">
                  <span className="text-white">Notas:</span> {education.notas}
                </p>
                <p className="text-slate-500  font-medium">
                  <span className="text-white">Detalle:</span>{" "}
                  {education.detalle}
                </p>
              </div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => {
                    llenarData(education.id);
                  }}
                  className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 glassy-icon m-3"
                  type="button"
                >
                  Editar
                </button>
                <button type="reset" className="glassy-icon m-3">
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        </>
      ))}
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center ">
          <div
            className="absolute inset-0  bg-black opacity-75"
            onClick={closeModal}
          ></div>
          <div className=" p-8 rounded shadow-lg z-20 bg-modal">
            {/* Contenido de la modal */}
            <form
              onSubmit={editarEstudio}
              className="w-[100%] flex flex-col flex-nowrap items-center gap-7"
            >
              <h3 className="text-xl font-semibold mb-4">Editar Estudio</h3>
              <label className="max-w-[30em] w-[100%]" hidden>
                id
                <input
                  type="text"
                  id="idEdit"
                  name="idEdit"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  placeholder=""
                  value={data.id}
                  required
                  onChange={cambiar}
                />
              </label>
              <label className="max-w-[30em] w-[100%]">
                Tipo
                <input
                  type="text"
                  id="tipoEdit"
                  name="tipoEdit"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  defaultValue={data.tipo}
                  onChange={cambiar}
                />
              </label>
              <label className="max-w-[30em] w-[100%]">
                Detalle
                <input
                  type="text"
                  id="detalleEdit"
                  name="detalleEdit"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  placeholder=""
                  defaultValue={data.detalle}
                  required
                  onChange={cambiar}
                />
              </label>
              <label className="max-w-[30em] w-[100%]">
                Fecha Fin
                <input
                  type="Date"
                  id="fechaFinEdit"
                  name="fechaFinEdit"
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
                  id="notasEdit"
                  name="contact-name"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  placeholder=""
                  required
                  onChange={cambiar}
                  defaultValue={data.notas}
                />
              </label>
              {/* Botón para cerrar la modal */}
              <div className="flex items-center justify-center">
                <button
                  type="submit"
                  className="mt-4  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded glassy-icon m-3"
                >
                  Editar
                </button>
                <button
                  onClick={closeModal}
                  className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded glassy-icon m-3"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
