import { Link } from "react-router-dom";
import { generalServices } from "../constants/data";
import ServiceList from "../components/ServiceList";
import SpecialtiesList from "../components/SpecialtiesList";

export default function Services() {
  return (
    <>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">Agregar Estudio</h2>
        {/* <ServiceList services={generalServices} /> */}
        <form
          action=""
          className="w-[100%] flex flex-col flex-nowrap items-center gap-7"
        >
          <label className="max-w-[30em] w-[100%]">
            Tipo
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Detalle
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Fecha Fin
            <input
              type="Date"
              id="contact-name"
              name="contact-name"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
              required
            />
          </label>
          <label className="max-w-[30em] w-[100%]">
            Notas
            <input
              type="text"
              id="contact-name"
              name="contact-name"
              className="mt-3 px-5 py-4 bg-transparent border-2 border-solid border-neutGray-500 rounded-[5px] max-w-[30em] w-[100%] backdrop-blur-[5px]"
              placeholder=""
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
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2 className="text-center">Estudios</h2>
        <SpecialtiesList />
      </section>
    </>
  );
}
