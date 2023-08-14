import React, { useEffect, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

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
      {technologies.map(
        (technology, index) =>
          // Renderizar un div solo si no es móvil o si es la primera tecnología o está dentro de las primeras initialBalls tecnologías
          (!isMobile || index === 0 || index < initialBalls) && (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon} />
            </div>
          )
      )}
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
