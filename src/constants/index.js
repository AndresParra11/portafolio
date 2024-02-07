import {
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
  loopstudios,
  ana,
  diego,
  whitney,
  sass,
  java,
  aristaDev,
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
    company_name: "Arist Dev SAS",
    icon: aristaDev,
    iconBg: "#383E56",
    date: "Enero 2024 - Julio 2023",
    points: [
      "Desarrollé una plataforma web especializada en la gestión y agendamiento de servicios para adultos, usando Vite (ES6) y React.js",
      "Implementé Firebase para la funcionalidad de autenticación, registro e inicio de sesión de la plataforma web.",
      "Traduje los wireframes y mockups de UX del equipo de diseño en funciones interactivas y responsivas usando HTML/CSS, SASS y ReactJS.",
      "Implementé servicios web (REST) para los diferentes CRUDs.",
      "Trabajo mediante la estrategía de Git Flow, revisión de código y correcciones constructivas a otros desarrolladores.",
      "Adopté la metodología ágil SCRUM para gestionar el desarrollo de proyectos de manera eficiente.",
    ],
  },
  {
    title: "Desarrollador React.js",
    company_name: "CorpoAyapel",
    icon: corpoayapel,
    iconBg: "#383E56",
    date: "Junio 2023 - Mayo 2023",
    points: [
      "Desarrollé una aplicación web para la venta de productos realizados por la compañía.",
      "Implementé Firebase para la funcionalidad de autenticación, registro e inicio de sesión de la plataforma web.",
      "Desarrollé la funcionalidad de pagos en línea con Epayco.",
      "Implementé el diseño responsivo, asegurando la compatibilidad entre navegadores y diversos tamaños de dispositivos.",
      "Trabajo mediante la estrategía de Git Flow, revisión de código y correcciones constructivas a otros desarrolladores.",
      "Adopté la metodología ágil SCRUM para gestionar el desarrollo de proyectos de manera eficiente.",
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
      "Andrés se destacó por su dominio de conceptos de desarrollo web, destreza en la creación de páginas web responsivas y estilizadas, resolución creativa de problemas y comunicación efectiva en equipos. Su enfoque en la experiencia del usuario y apoyo a sus compañeros lo distinguen como un activo valioso.",
    name: "Whitney Stevenson",
    designation: "Desarrollador Frontend",
    company: "Makaia",
    image: whitney,
  },
];

const projects = [
  {
    name: "CorpoAyapel",
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
      "Este aplicativo permite visualizar los diferentes planetas del sistema solar, con sus características y la posibilidad de reservar un viaje a cada uno de ellos. Se realizó un aplicativo en React.js de una landing-page, siguiendo el diseño especificado en Figma. ",
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
    name: "Loopstudios",
    description:
      "Se realizó una landing page teniendo en cuenta los requerimientos establecidos en un figma. Se utilizan diferentes tecnologías para aplicar el estilo, la estructura y las funcionalidades necesarias. También se realiza el diseño responsivo de la aplicación.",
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
        name: "sweetalert2",
        color: "white-text-gradient",
      },
    ],
    image: loopstudios,
    source_code_link: "https://valentinasj.github.io/Oceanic/",
  },
];

export { services, technologies, experiences, testimonials, projects };
