/* import { projects } from "../constants/data"; */
import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import { Global } from "../helpers/Global";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
  const [idEdit, setIdEdit] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const editarProyecto = async (e) => {
    e.preventDefault();
    let nombre = document.querySelector("#nombreEdit");
    let detalle = document.querySelector("#detalleEdit");
    let link = document.querySelector("#linkEdit");
    try {
      const request = await fetch(Global.url + "/proyecto/editar/" + idEdit, {
        method: "PUT",
        body: JSON.stringify({
          nombre: nombre.value,
          detalle: detalle.value,
          link: link.value,
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
      const response = await fetch(Global.url + "/proyecto/listar");
      const data = await response.json();

      // Establecer los datos de educación en el estado
      setProjectList(data.resultado);
    } catch (error) {
      console.error("Error editing education: ", error);
    }
  };

  useEffect(() => {
    async function fetchAllProjectsData() {
      try {
        const response = await fetch(Global.url + "/proyecto/listar");
        const data = await response.json();

        // Establecer los datos de educación en el estado
        setProjectList(data.resultado);
      } catch (error) {
        console.error("Error fetching all education data: ", error);
      }
    }

    fetchAllProjectsData();
  }, []);
  return (
    <>
      <ul className="max-w-[1000px] w-auto flex flex-col flex-nowrap items-start justify-center gap-10 md:flex-row md:flex-wrap md:gap-11">
        {projectList.map((project, id) => (
          <li
            key={id}
            className=" flex flex-col flex-nowrap items-center justify-center gap-7 glassy-screen !w-[350px] !min-h-[300px] !p-5 sm:!w-[250px] sm:!min-h-[200px] sm:!p-4 md:!w-[250px] md:!min-h-[200px] md:!p-5 lg:!w-[250px] lg:!min-h-[200px] lg:!p-7"
          >
            <p>Nombre: {project.nombre}</p>
            <p>Detalle: {project.detalle}</p>
            <p>
              <a href="google.com">Link: {project.link}</a>
            </p>
            <div className="flex items-center justify-center">
              <button
                className="glassy-icon m-3"
                onClick={() => {
                  openModal(); // Abre la modal al hacer clic en el botón de editar
                  setIdEdit(project._id); // Establece el ID para editar
                  setData({
                    id: project._id,
                    nombre: project.nombre,
                    detalle: project.detalle,
                    link: project.link,
                  });
                }}
              >
                Editar
              </button>

              <button
                className="glassy-icon m-3"
                onClick={async () => {
                  try {
                    await fetch(Global.url + "proyecto/borrar/" + project._id, {
                      method: "DELETE",
                    });

                    const response = await fetch(Global.url + "/proyecto/listar");
                    const data = await response.json();

                    // Establecer los datos de educación en el estado
                    setProjectList(data.resultado);
                  } catch (error) {
                    console.error("Error deleting project or updating list:", error);
                  }
                }}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center ">
          <div className="absolute inset-0  bg-black opacity-75" onClick={closeModal}></div>
          <div className=" p-8 rounded shadow-lg z-20 bg-modal">
            {/* Contenido de la modal */}
            <form onSubmit={editarProyecto} className="w-[100%] flex flex-col flex-nowrap items-center gap-7">
              <h3 className="text-xl font-semibold mb-4">Editar Proyecto</h3>
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
                nombre
                <input
                  type="text"
                  id="nombreEdit"
                  name="nombreEdit"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  defaultValue={data.nombre}
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
                Link
                <input
                  type="text"
                  id="linkEdit"
                  name="contact-name"
                  className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
                  placeholder=""
                  required
                  defaultValue={data.link}
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
    </>
  );
}
