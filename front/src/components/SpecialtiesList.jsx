import React, { useState, useEffect } from "react";

import { educations } from "../constants/data";
import HelperForm from "../helpers/HelperForm";
import { Global } from "../helpers/Global";

export default function SpecialtiesList({ studies, setStudies }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const [idEdit, setIdEdit] = useState(-1); //Esta en -1 para que no muestre la modal directamente

  const { form } = HelperForm({});

  const editarEstudio = async (e) => {
    e.preventDefault();
    let tipo = document.querySelector("#tipoEdit");
    let detalle = document.querySelector("#detalleEdit");
    let fechaFin = document.querySelector("#fechaFinEdit");
    let notas = document.querySelector("#notasEdit");

    try {
      const request = await fetch(Global.url + "/estudio/editar/" + idEdit, {
        method: "PUT",
        body: JSON.stringify({
          tipo: tipo.value,
          detalle: detalle.value,
          fechaFin: fechaFin.value,
          notas: notas.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      const dataCons = await request.json();
      console.log("Datos actualizados: ", dataCons); // Verifica los datos recibidos

      // Actualiza el estado después de la edición exitosa
      closeModal(); // Cierra la modal después de editar
      // Reinicia los valores a vacío o a un estado inicial según sea necesario
      setData({});
      setIdEdit(-1);
      // También podrías recargar los datos de educación después de la edición para reflejar los cambios inmediatamente
      // Ejecutar nuevamente la solicitud para obtener los datos actualizados
      const response = await fetch(Global.url + "/estudio/listar");
      const data = await response.json();

      // Establecer los datos de educación en el estado
      setStudies(data.resultado);
    } catch (error) {
      console.error("Error editing education: ", error);
    }
  };

  const eliminarEstudio = async (idBorrar) => {
    try {
      const request = await fetch(Global.url + "/estudio/borrar/" + idBorrar, {
        method: "DELETE",
      });

      const dataCons = await request.json();
      setData({});

      // También podrías recargar los datos de educación después de la edición para reflejar los cambios inmediatamente
      // Ejecutar nuevamente la solicitud para obtener los datos actualizados
      const response = await fetch(Global.url + "/estudio/listar");
      const data = await response.json();

      // Establecer los datos de educación en el estado
      setStudies(data.resultado);
    } catch (error) {
      console.error("Error eliminando education: ", error);
    }
  };

  useEffect(() => {
    async function fetchAllEducationData() {
      try {
        const response = await fetch(Global.url + "/estudio/listar");
        const data = await response.json();

        // Establecer los datos de educación en el estado
        setStudies(data.resultado);
      } catch (error) {
        console.error("Error fetching all education data: ", error);
      }
    }

    fetchAllEducationData();
  }, []);
  return (
    <div className="w-[100%] grid justify-items-center items-stretch justify-center gap-10 sm:gap-9 md:gap-10 grid-cols-[repeat(auto-fit,minmax(250px,250px))] sm:grid-cols-[repeat(auto-fit,minmax(280px,280px))] md:grid-cols-[repeat(auto-fit,minmax(250px,250px))] lg:grid-cols-[repeat(auto-fit,minmax(215px,215px))] row-auto">
      {studies.map((education, id) => (
        <div key={id}>
          <p>Tipo: {education.tipo}</p>
          <p>Detalle: {education.detalle}</p>
          <p>Fecha Fin: {new Date(education.fechaFin).toLocaleDateString()}</p>
          <p>Notas: {education.notas}</p>
          <button
            onClick={() => {
              openModal(); // Abre la modal al hacer clic en el botón de editar
              setIdEdit(education._id); // Establece el ID para editar
              setData({
                id: education._id,
                tipo: education.tipo,
                detalle: education.detalle,
                notas: education.notas,
              });
            }}
          >
            Editar
          </button>
          <br></br>
          <button
            onClick={() => {
              alert(education._id);
              eliminarEstudio(education._id);
            }}
          >
            Eliminar
          </button>
        </div>
      ))}
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center ">
          <div className="absolute inset-0  bg-black opacity-75" onClick={closeModal}></div>
          <div className=" p-8 rounded shadow-lg z-20 bg-modal">
            {/* Contenido de la modal */}
            <form onSubmit={editarEstudio} className="w-[100%] flex flex-col flex-nowrap items-center gap-7">
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
                  defaultValue={data.notas}
                />
              </label>
              {/* Botón para cerrar la modal */}
              <div className="flex items-center justify-center">
                <button type="submit" className="mt-4  bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded glassy-icon m-3">
                  Editar
                </button>
                <button onClick={closeModal} className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded glassy-icon m-3">
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
