import { educations } from "../constants/data";

export default function SpecialtiesList() {
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
                  data-modal-target="authentication-modal"
                  data-modal-toggle="authentication-modal"
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
    </div>
  );
}
