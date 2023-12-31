import { useOutletContext } from "react-router-dom";
import Socials from "../components/Socials";
import Projects from "../components/Projects";
import Testimonials from "../components/Testimonials";
import SplashSection from "../components/SplashSection";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [isDarkMode] = useOutletContext();
  /* const [projects, setProjects] = useState([]); */

  return (
    <>
      <SplashSection splashMessage={"Portafolio Stiven Herrera - Felipe Calderon"} isDarkMode={isDarkMode} isErrorMode={false} />
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h1 className="text-center max-w-[18em]">Resolviendo visiones con experiencias web excepcionales</h1>
        <p className="text-justify">
          ¡Hola y bienvenido! Somos dos desarrolladores web apasionados por resolver visiones a través de experiencias web excepcionales. Con una
          mezcla de creatividad y experiencia técnica, me enorgullezco de crear Sitios web centrados en el usuario que dejan un impacto duradero.
          Juntos, desentrañemos las posibilidades del ámbito digital y creemos Soluciones en línea que cautivan, inspiran e impulsan el éxito.
        </p>
      </section>
      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Nuestros Proyectos</h2>
        <Projects />
      </section>

      <section className="w-[100%] flex flex-col flex-nowrap items-center justify-center gap-7 px-mobileBound sm:px-8 sm:gap-8 md:gap-9 lg:gap-10">
        <h2>Contacto</h2>
        <Socials />
      </section>
    </>
  );
}
