/* import { projects } from "../constants/data"; */
import React, { useState, useEffect } from "react";
import ProjectModal from "./ProjectModal";
import { Global } from "../helpers/Global";

export default function Projects() {
  const [projectList, setProjectList] = useState([]);
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
    <ul className="max-w-[1000px] w-auto flex flex-col flex-nowrap items-start justify-center gap-10 md:flex-row md:flex-wrap md:gap-11">
      {projectList.map((project, id) => (
        <li key={id} className="m-auto flex flex-col flex-nowrap items-center justify-center gap-6 project-collection basis-0 grow shrink-1">
          <p>Nombre: {project.nombre}</p>
          <p>Detalle: {project.detalle}</p>
          <p>
            <a href={project.link}>Link: {project.link}</a>
          </p>
          <button
            onClick={() => {
              alert("Editar");
            }}
          >
            Editar
          </button>

          <button
            onClick={async () => {
              try {
                alert(project._id);
                await fetch(Global.url + "proyecto/borrar/" + project._id, { method: "DELETE" });
                alert("Eliminado correctamente");

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
        </li>
      ))}
    </ul>
  );
}
