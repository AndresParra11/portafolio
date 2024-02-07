import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introducción</p>
        <h2 className={styles.sectionHeadText}>Descripción general.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] text-justify"
      >
        Soy un desarrollador Frontend con un año de experiencia sobresaliente en
        tecnologías clave. Mis habilidades sólidas en JavaScript (ECMAScript) y
        ReactJS, junto con el dominio en componentes funcionales, Hooks,
        Patrones, Redux y Router, me permiten crear interfaces dinámicas y
        atractivas. He trabajado con servicios Restful, implementando sistemas
        de diseño y utilizando herramientas como Firebase, SASS y Bootstrap.
        Además, tengo experiencia en versionado con Git y Github, facilitando un
        flujo de trabajo colaborativo y eficiente. Actualmente, estoy ampliando
        mis conocimientos en NodeJS, ExpressJS, NextJS y MongoDB. Destaco por mi
        capacidad de adaptación y colaboración, ofreciendo soluciones escalables
        y fáciles de usar. Me especializo en operaciones CRUD, integración y
        consumo de API REST para una comunicación fluida entre componentes del
        sistema.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
