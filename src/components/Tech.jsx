import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { useEffect, useState } from "react";

const Tech = () => {
  const initialBalls = 7; // Número inicial de bolas a renderizar
  const [showAllBalls, setShowAllBalls] = useState(false);

  // Manejar la interacción del usuario para cargar todas las bolas
  const handleLoadAllBalls = () => {
    setShowAllBalls(true);
  };
  // Utilizar useEffect para forzar un nuevo renderizado cuando showAllBalls cambia
  useEffect(() => {
    // No es necesario hacer nada aquí, solo utilizamos useEffect para forzar un renderizado
  }, [showAllBalls]);
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* Renderizar todas las bolas si showAllBalls es verdadero */}
          {showAllBalls || index < initialBalls ? (
            <BallCanvas icon={technology.icon} />
          ) : null}
        </div>
      ))}
      {!showAllBalls && (
        // Mostrar un botón para cargar todas las bolas cuando no se han cargado todas
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadAllBalls}
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            Cargar todas las Tecnologías
          </button>
        </div>
      )}
    </div>
  );
};

export default SectionWrapper(Tech, "");
