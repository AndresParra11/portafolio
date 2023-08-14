import {
  backend,
  web,
  javascript,
  firebase,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  corpoayapel,
  corpoayapelWeb,
  spaceToruism,
  oceanic,
  ana,
  diego,
  whitney,
  sass,
  java,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "Sobre mí",
  },
  {
    id: "work",
    title: "Trabajos",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];

const services = [
  {
    title: "Desarrollador Frontend",
    icon: web,
  },
  {
    title: "Desarrollador Backend",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "SASS",
    icon: sass,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Desarrollador React.js",
    company_name: "CorpoAyapel",
    icon: corpoayapel,
    iconBg: "#383E56",
    date: "Mayo 2023 - Junio 2023",
    points: [
      "Desarrollo de una aplicación web para la venta de productos realizados por la compañía.",
      "Desarrollo de la funcionalidad de autenticación de usuarios con correo electrónico y cuenta de Google.",
      "Edición de contenido de la página web por el administrador mediante sanity.",
      "Desarrollo de la funcionalidad de pago con Epayco.",
      "Implementación de diseño responsivo y compatibilidad entre navegadores.",
      "Trabajo mediante la estrategía de Git Flow, revisión de código y correcciones consturctivas a otros desarrolladores.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Durante el tiempo en el que estuvo bajo mi supervisión, demostró una capacidad excepcional para aprender y adaptarse rápidamente, lo que lo convierte en un activo valioso para cualquier equipo de desarrollo.",
    name: "Ana Ramírez",
    designation: "Desarrollador Senior",
    company: "Makaia",
    image: ana,
  },
  {
    testimonial:
      "Andrés tiene todas las habilidades técnicas y blandas necesarias en la industria del desarrollo web Frontend Junior, ver su avance en los diferentes proyectos creados fue una experiencia única.",
    name: "Diego Rodríguez",
    designation: "Líder de entrenamiento",
    company: "Makaia",
    image: diego,
  },
  {
    testimonial:
      "En los diferentes desarrollos en los que estuvo bajo mi supervisión, Andrés gran capacidad de aprendizaje autónomo, trabajo colaborativo y excelente gestión del tiempo. ¡Un gran profesional",
    name: "Whitney Stevenson",
    designation: "CTO",
    company: "Makaia",
    image: whitney,
  },
];

const projects = [
  {
    name: "MarketPlace CorpoAyapel",
    description:
      "Este es el aplicativo web e-commerce de Artesanías CorpoAyapel, el cual presenta una página para la venta de productos realizados por los artesanos, permitiendo realizar un logueo con correo electrónico o cuenta de google y realizar las compras virtuales mediante Epayco.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "white-text-gradient",
      },
      {
        name: "gitflow",
        color: "orange-text-gradient",
      },
    ],
    image: corpoayapelWeb,
    source_code_link:
      "https://github.com/MAKAIABootcamp/corpoAyapelEcommerce-project-front-4",
  },
  {
    name: "Space-Tourism",
    description:
      "Se realiza un aplicativo en React.js de una landing-page, siguiendo el diseño especificado en Figma. Este aplicativo permite visualizar los diferentes planetas del sistema solar, con sus características y la posibilidad de reservar un viaje a cada uno de ellos.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "gitflow",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "white-text-gradient",
      },
    ],
    image: spaceToruism,
    source_code_link: "https://github.com/AndresParra11/space-tourism",
  },
  {
    name: "Oceanic",
    description:
      "Se realizó un aplicativo web que simula la compra de unos tiquetes de avión. Se realizó un diseño responsivo y libre según los desarrolladores.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "sass",
        color: "green-text-gradient",
      },
      {
        name: "materiaL-ui",
        color: "pink-text-gradient",
      },
      {
        name: "sweetalert2",
        color: "white-text-gradient",
      },
    ],
    image: oceanic,
    source_code_link: "https://valentinasj.github.io/Oceanic/",
  },
];

export { services, technologies, experiences, testimonials, projects };
