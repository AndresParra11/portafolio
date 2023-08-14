import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const initialBalls = 6; // Número inicial de bolas a renderizar
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar si la vista actual es móvil
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    // Establecer el observador para detectar cambios en la vista móvil
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // Limpiar el observador cuando el componente se desmonte
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* Renderizar todas las tecnologías si no es móvil o mostrar las primeras 6 si es móvil */}
          {!isMobile || index < initialBalls ? (
            <BallCanvas icon={technology.icon} />
          ) : null}
        </div>
      ))}
      {isMobile && (
        // Mostrar un mensaje con un enlace para ver todas las tecnologías solo en la vista móvil
        <div className="flex justify-center mt-4">
          <a
            href="https://drive.google.com/file/d/1tsXm5udEqkxos-MDrhWjBwKAXEA9V6hY/view?usp=drive_link"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Ver todas las Tecnologías en la hoja de vida!
          </a>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
