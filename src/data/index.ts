import { FaUserGraduate } from "react-icons/fa";
import { MdWorkHistory } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";
import { BsFillGearFill } from "react-icons/bs";

export const heroSectionText = {
  supTitle: "Hola, soy",
  title: "Víctor Manuel",
  subTitle: "Ordiales García",
  descriptionSup: "Desarrollador Web Full Stack y graduado en Física",
  descriptionSub:
    "Me considero amante de las nuevas tecnologías, del desarrollo de software y de la Física de Partículas.",
};

export const mainSectionTitle = {
  mainTitle: "Bienvenido a mi",
  mainTitleTail: "Sitio Web",
};

export const mainSectionText = {
  description:
    "¡Bienvenidos a mi sitio web! Soy Víctor Manuel Ordiales García, desarrollador web Full Stack y graduado en física. Aquí encontrarás información sobre mi formación académica, experiencia laboral y proyectos destacados. ¡Contáctame para discutir cómo puedo ayudarte a alcanzar tus objetivos tecnológicos!",
};
export const heroSectionButtons = [
  { bgColor: "#ca8a04", title: "Download CV", to: "#cv" },
  { bgColor: "#5b21b6", title: "Contacto", to: "#contact-section" },
];

export const animateHeroBanner = {
  translateX: 0,
  opacity: 1,
  transition: {
    duration: 1,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  },
};
export const animateHeroSectionLeftInitialState = {
  translateX: -50,
  opacity: 0,
};
export const animateHeroSectionRightInitialState = {
  translateX: 50,
  opacity: 0,
};

export const animateMainSection = {
  translateY: 0,
  opacity: 1,
  transition: {
    duration: 1,
    delay: 0.2,
    ease: [0, 0.71, 0.2, 1.01],
  },
};
export const animateMainSectionContent = {
  translateY: 0,
  opacity: 1,
  transition: {
    duration: 1,
    delay: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
};

export const animateMainSectionInitialState = {
  translateY: 100,
  opacity: 0,
};

export const animateMainSectionInitialStateContent = {
  translateY: 100,
  opacity: 0,
};

export const cardsMainSection = [
  {
    title: "Educación",
    description:
      "Información sobre mi formación académica, cursos y certificaciones",
    icon: FaUserGraduate,
    bgIcon: "#0d9488",
    to: "#education-section",
  },
  {
    title: "Experiencia",
    description:
      "Información sobre mi experiencia laboral y proyectos destacados",
    icon: MdWorkHistory,
    bgIcon: "#ca8a04",
    to: "#experience-section",
  },
  {
    title: "Proyectos",
    description: "Información sobre mis proyectos personales",
    icon: AiOutlineProject,
    bgIcon: "#8f1f0d",
    to: "#projects-section",
  },
  {
    title: "Habilidades",
    description: "Información sobre mis habilidades y tecnologías",
    icon: BsFillGearFill,
    bgIcon: "#5b21b6",
    to: "#skills-section",
  },
];

export const aboutMeSection = {
  title: "Conóceme:",
  subTitle: "SamuraiOr.Dev",
  parrafos: [
    "¡Hola! Soy Víctor Manuel Ordiales García, un apasionado del desarrollo web y la física. Mi experiencia y formación en ambas disciplinas me han permitido desarrollar habilidades únicas que me permiten abordar problemas de manera innovadora y creativa",
    "Como graduado en física, tengo una comprensión sólida de los principios matemáticos y científicos que rigen el mundo que nos rodea. Esta base sólida me ha permitido tener una perspectiva única en el mundo del desarrollo web, lo que me ha permitido resolver problemas complejos con una comprensión profunda y detallada",
    "Mi experiencia en el desarrollo web se extiende a unos dos años de experiencia en la creación de sitios web de alta calidad y fácil uso. He trabajado en proyectos de desarrollo web personalizados, programación de scripts y manejo de bases de datos. Mi objetivo es siempre crear soluciones únicas y personalizadas para cada proyecto que se me presenta",
    "Soy una persona apasionada y dedicada que siempre está buscando oportunidades para seguir aprendiendo y mejorando mis habilidades. Me encanta estar al tanto de las últimas tendencias y tecnologías en el desarrollo web y la física, y aplicarlas en mis proyectos",
    "Estoy emocionado de compartir mi pasión y conocimientos contigo. ¡Explora mi sección personal y descubre cómo puedo ayudarte en tus proyectos de desarrollo web y más allá!",
  ],
};

export const educationSection = {
  title: "Educación",
  description:
    "Uno de mis mayores logros académicos ha sido obtener el graduado en Física de la Universidad de Extremadura. Además de esta titulación, he realizado numerosos cursos enfocados en el desarrollo web y en el aprendizaje automático. Actualmente, sigo realizando gran cantidad de curso y certificaciones para seguir creciendo como profesional",
};
export interface ExperienceTag {
  name: string;
  bg: string;
  textColor: string;
}
export interface Experience {
  id: number;
  job: string;
  date: string;
  project: string;
  tags: ExperienceTag[];
}
export const experience = [
  {
    id: 2,
    job: "Developer, Viewnext S.A",
    date: "Agosto 2021 - Deciembre 2022",
    project: "Proyecto SAC F.O.Digital + Portales + Movilidad LEAN",
    tags: [
      {
        name: "Java",
        bg: "rgb(30 58 138)",
        textColor: "rgb(147 197 253)",
      },
      {
        name: "Jsp",
        bg: "rgb(55 65 81)",
        textColor: "rgb(209 213 219)",
      },
      {
        name: "Html",
        bg: "rgb(127 29 29)",
        textColor: "rgb(252 165 165)",
      },
      {
        name: "Css",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "Javascript",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "Owcs",
        bg: "rgb(6 95 70)",
        textColor: "rgb(110 231 183)",
      },
      {
        name: "...",
        bg: "bg-transparent",
      },
    ],
  },
  {
    id: 3,
    job: "Developer, Viewnext S.A",
    date: "Diciembre 2022 - Actualidad",
    project: "Proyecto SAC F.O.Digital + Portales + Movilidad LEAN",
    tags: [
      {
        name: "Spring",
        bg: "rgb(30 58 138)",
        textColor: "rgb(147 197 253)",
      },
      {
        name: "Thymeleaf",
        bg: "rgb(55 65 81)",
        textColor: "rgb(209 213 219)",
      },
      {
        name: "Oracle Sql",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "JPA",
        bg: "rgb(107 33 168)",
        textColor: "rgb(216 180 254)",
      },
      {
        name: "Hibernate",
        bg: "rgb(133 77 14)",
        textColor: "rgb(253 224 71)",
      },
      {
        name: "...",
        bg: "bg-transparent",
      },
    ],
  },
  {
    id: 1,
    job: " I+D, eCapure3D S.L",
    date: "Abril 2021 - Junio 2021",
    project: "Algoritmos predictivos y análisis de datos (Prácticas).",
    tags: [
      {
        name: "Python",
        bg: "rgb(30 58 138)",
        textColor: "rgb(147 197 253)",
      },
      {
        name: "Numpy",
        bg: "rgb(107 33 168)",
        textColor: "rgb(216 180 254)",
      },
      {
        name: "Pandas",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "Scikit",
        bg: "rgb(127 29 29)",
        textColor: "rgb(252 165 165)",
      },
      {
        name: "Postgresql",
        bg: "rgb(55 65 81)",
        textColor: "rgb(209 213 219)",
      },
      {
        name: "...",
        bg: "bg-transparent",
      },
    ],
  },
].sort((a, b) => b.id - a.id);

export const educationSectionCards = [
  {
    id: 2,
    title: "Grado En Física, Uex",
    date: "2014 - 2021",
    description:
      "El grado en Física ofrece una formación centrada en los fenómenos físicos y las leyes que los explican",
    tags: [
      {
        name: "Física",
        bg: "rgb(30 58 138)",
        textColor: "rgb(147 197 253)",
      },
      {
        name: "Óptica",
        bg: "rgb(55 65 81)",
        textColor: "rgb(209 213 219)",
      },
      {
        name: "Mecánica Clásica",
        bg: "rgb(127 29 29)",
        textColor: "rgb(252 165 165)",
      },
      {
        name: "Partículas",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "Mecánica Cuántica",
        bg: "rgb(113 63 18)",
        texColor: "rgb(253 224 71)",
      },
      {
        name: "Astrofísica",
        bg: "rgb(49 46 129)",
        textColor: "rgb(165 180 252)",
      },

      {
        name: "...",
        bg: "transparent",
      },
    ],
  },
  {
    id: 1,
    title: "Bachiller, I.E.S Norba",
    date: "2012 - 2014",
    description:
      "El bachillerato científico permite adquirir los conocimientos y destrezas básicas en el ámbito científico",
    tags: [
      {
        name: "Física",
        bg: "rgb(30 58 138)",
        textColor: "rgb(147 197 253)",
      },
      {
        name: "Biología",
        bg: "rgb(55 65 81)",
        textColor: "rgb(209 213 219)",
      },
      {
        name: "Matemáticas",
        bg: "rgb(127 29 29)",
        textColor: "rgb(252 165 165)",
      },
      {
        name: "Química",
        bg: "rgb(20 83 45)",
        textColor: "rgb(134 239 172)",
      },
      {
        name: "Inglés",
        bg: "rgb(113 63 18)",
        texColor: "rgb(253 224 71)",
      },
      {
        name: "Lengua",
        bg: "rgb(49 46 129)",
        textColor: "rgb(165 180 252)",
      },
      {
        name: "...",
        bg: "bg-transparent",
      },
    ],
  },
].sort((a, b) => b.id - a.id);

export interface TypeArrayCourses {
  id: number;
  title: string;
  date: string;
  item1: string;
  item2: string;
  item3: string;
  horas?: string;
  item4: string;
  url: string;
}

export const arrayCourses: TypeArrayCourses[] = [
  {
    id: 1,
    title: "Desarrollo web completo con Html5, Css3, Js, Ajax, Php y MySql.",
    date: "Agosto 2020 - Octubre 2020 | Plataforma Web Udemy.",
    item1: "Conocimiento medios/avanzado de Htm5, Css3 y Js.",
    item2: "Conocimientos básicos de php y bases de datos relacionales.",
    item3: "Realización de númerosos proyectos.",
    horas: "54 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/",
  },
  {
    id: 2,
    title: "Css Grid y Flexbox, La guía definitiva, crea + 10 proyectos.",
    date: "Octubre 2020 - Noviembre 2020 | Plataforma Web Udemy.",
    item1: "Aprendizaje de CSS.",
    item2: "Flex.",
    item3: "Grid.",
    horas: "13 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/css-grid-y-flexbox-la-guia-definitiva-crea-10-proyectos/",
  },
  {
    id: 3,
    title: "Master en JavaScript: Js, Jquery, Angular y NodeJs.",
    date: "Noviembre 2020 – Enero 2021 | Plataforma Web Udemy.",
    item1: "Desarrollo web fullstack usando JavaScript.",
    item2: "Frontend: Js,Jquery,Html,Css y Angular.",
    item3: "Backend: NodeJs.",
    horas: "32 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/master-en-javascript-aprender-js-jquery-angular-nodejs-y-mas/",
  },
  {
    id: 4,
    title: "Master en Python: Python3, Django, Flask Y Tkinter.",
    date: "Octubre 2020 – Noviembre 2020.",
    item1: "Desarrollo web fullstack usando Python.",
    item2: "Frontend: Html y Css.",
    item3: "Backend: Django y Flask.",
    item4: "Leer más",
    horas: "30.5 horas.",
    url: "https://www.udemy.com/course/master-en-python-aprender-python-django-flask-y-tkinter//",
  },
  {
    id: 5,
    title: "Master en Css3: Reponsive, Sass, FlexBox, Grid Y Boostrap.",
    date: "Enero 2021 | Plataforma Web Udemy.",
    item1: "Maquetación de paǵinas web.",
    item2: "Preprocesadores: Sass y Leess.",
    item3: "Flex y Grid.",
    item4: "Leer más",
    horas: "20.5 horas.",
    url: "https://www.udemy.com/course/master-en-css-responsive-sass-flexbox-grid-y-boostrap-4/",
  },
  {
    id: 6,
    title: "Electron JS y ReactJS: Creando un Spotify",
    date: "Marzo 2021 –Julio 2021 | Plataform Web Udemy.",
    item1: "Clone de Spotify.",
    item2: "Tecnologías Web: ReactJS, Sass y Firebase.",
    item3: "Tecnologías Desktop: ElectronJS",
    horas: "19.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/electron-js-y-react-js-creando-un-spotify/",
  },
  {
    id: 7,
    title: "Curso Completo: Linux Bash Shell Scripting +Ejemplos Reales",
    date: "MAYO 2022.",
    item1: "Gestión de permisos: usuarios, grupos, ficheros, etc.",
    item2: "Redirecciones, tuberías, monitores de procesos,etc.",
    item3: "Fundamentos de Bash.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/shell-scripting-linux-bash/learn/lecture/27171062?start=240#overview",
  },
  {
    id: 8,
    title: "Curso de Tailwind CSS - Desde cero hasta profesional",
    date: "JULIO 2021.",
    item1: "Maquetación de páginas web.",
    item2: "Css y Tailwind.",
    item3: "Varios proyectos.",
    horas: "5.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/shell-scripting-linux-bash/learn/lecture/27171062?start=240#overview",
  },
  {
    id: 9,
    title: "React: De cero a experto ( Hooks y MERN )",
    date: "Agosto 2022 - Mayo 2023 | Plataforma Web Udemy.",
    item1: "TypeScript.",
    item2: "React.",
    item3: "Hooks, Custom Hooks, MERN, etc.",
    horas: "54 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/shell-scripting-linux-bash/learn/lecture/27171062?start=240#overview",
  },
  {
    id: 10,
    title: "Curo Completo: Linux Bash Shell Scripting +Ejemplos Reales",
    date: "Julio 2022  | Plataforma Web Udemy.",
    item1: "Linux.",
    item2: "Control de permisos.",
    item3: "Bash.",
    horas: "12.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/shell-scripting-linux-bash/learn/lecture/27171062?start=240#overview",
  },

  {
    id: 12,
    title: "Next.js: El framework de React para producción",
    date: "Enero 2023 - Mayo 2023 | Plataforma Web Udemy.",
    item1: "Nextjs.",
    item2: " SSR, SSG, etc.",
    item3: "MERN, Typescript, etc.",
    horas: "46 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/shell-scripting-linux-bash/learn/lecture/27171062?start=240#overview",
  },
  {
    id: 13,
    title: "Master en React: Aprender ReactJS, Hooks, MERN, NodeJS, JWT+",
    date: "Enero 2023 - Mayo 2023 | Plataforma Web Udemy.",
    item1: "React.",
    item2: "Hooks, Custom Hooks, MERN, etc.",
    item3: "Nodejs, JWT, etc.",
    horas: "39.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/master-en-react-aprender-reactjs-hooks-mern-nodejs-jwt/",
  },
  {
    id: 14,
    title: "JavaScript Moderno: Guía para dominar el lenguaje",
    date: "Enero 2023 - Febrero 2023 | Plataforma Web Udemy.",
    item1: "JavaScript.",
    item2: "ES6, ES7, etc.",
    item3: "Nuevas características.",
    horas: "27.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/javascript-fernando-herrera/",
  },
  {
    id: 15,
    title: "TypeScript: Tu completa guía y manual de mano",
    date: "Enero 2023 - Febrero 2023 | Plataforma Web Udemy.",
    item1: "TypeScript.",
    item2: "Fundamentos, etc.",
    item3: "Nuevas características.",
    horas: "9 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/typescript-guia-completa/",
  },
  {
    id: 16,
    title: "Curso de Diseño Web moderno desde cero a avanzado HTML5 y CSS3",
    date: "Diciembre 2021 | Plataforma Web Udemy.",
    item1: "HTML5.",
    item2: "CSS3.",
    item3: "Flexbox, Grid, etc.",
    horas: "17.5 horas.",
    item4: "Leer más",
    url: "https://www.udemy.com/course/curso-diseno-web-moderno-desde-cero/",
  },
];

// porcentaje: number
//     to: string
//     bgColor?: string
//     textColor?: string

export const coursesCertificationsProgress = [
  {
    id: 1,
    title: "Tomcat para Administradores y desarrolladores",
    porcentaje: 25,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/tomcat-para-administradores-y-desarrolladores/",
  },
  {
    id: 2,
    title: "Microservicios con Spring Boot y Spring Cloud Netflix Eureka",
    porcentaje: 11,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/microservicios-con-spring-boot-y-spring-cloud/",
  },
  {
    id: 3,
    title: "Curso Django y Django rest framework de básico a profesional",
    porcentaje: 50,
    bgColor: "#ca8a04",
    textColor: "#765103",
    to: "https://www.udemy.com/course/curso-profesional-de-programacion-web-con-python-y-django/",
  },
  {
    id: 4,
    title: "React - La Guía Completa: Hooks Context Redux MERN +15 Apps",
    porcentaje: 80,
    bgColor: "#ca8a04",
    textColor: "#765103",
    to: "https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/",
  },
  {
    id: 5,
    title: "Angular: De cero a experto - Edición 2023",
    porcentaje: 33,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/angular-fernando-herrera/",
  },
  {
    id: 6,
    title: "Node.js - Bootcamp Desarrollo Web inc. MVC y REST APIs",
    porcentaje: 11,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/nodejs-bootcamp-desarrollo-web-mvc-y-rest-apis/",
  },
  {
    id: 7,
    title: "Node: Entorno de ejecucción para JavaScript",
    porcentaje: 70,
    bgColor: "#ca8a04",
    textColor: "#765103",
    to: "https://www.udemy.com/course/node-de-cero-a-experto/",
  },
  {
    id: 8,
    title: "Nest: Desarrollo backend escalable con Node",
    porcentaje: 35,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/nest-framework/",
  },
  {
    id: 9,
    title: "GIT+GitHub: Todo un sistema de control de versiones de cero",
    porcentaje: 10,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/git-github/",
  },
  {
    id: 10,
    title: "Aprende lenguaje GO (GOLANG) desde cero a experto",
    porcentaje: 33,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/lenguaje-go/",
  },
  {
    id: 11,
    title: "React: Creando webapp Full Stack con Spring Boot 2023",
    porcentaje: 17,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/react-spring-creando-webapp-full-stack/",
  },
  {
    id: 12,
    title: "Adobe Experience Manager Site",
    porcentaje: 0,
    bgColor: "rgb(127 29 29)",
    textColor: "rgb(252 165 165)",
    to: "https://www.udemy.com/course/adobe-experience-manager-site/",
  },
];

export const skillsSection = {
  title: "Habilidades",
  description:
    "Durante mi trayectoria profesional y estudiantil, he adquerido númerosos conocimientos tanto en el ámbito de la física como en el desarrollo de sofwate. A continuación, se muestran las tecnologías y habilidades que he adquirido/dominado durante todo este proceso",
};
export const expeienceSection = {
  title: "Experiencia",
  description:
    "Tengo alrededor de 2 años de experiencia trabajando en proyectos tanto de frontend como de backend, además de un breve período, de dos  meses, en el que me dediqué a proyectos de machine learning",
};
export const allProjects = [
  {
    id: "frontend/1",
    title: "Scroll Infinite",
    img: "https://unsplash.it/200/200",
    url: "https://scroll-infinite-react-js.vercel.app/",
    repo: " ",
  },
  {
    id: "frontend/2",
    title: "Pokedex Next JS",
    img: "/img/pokedex.png",
    url: "https://pokedex-roan-alpha.vercel.app/",
    repo: "https://github.com/samuraiOrDev/pokedex/",
  },
  {
    id: "frontend/3",
    title: "To Do List React JS",
    url: "https://tod-do-react.vercel.app/",
    img: "/img/toDoReact.png",
    repo: "https://github.com/samuraiOrDev/To-Do-React",
  },
  {
    id: "frontend/4",
    title: "Animal Patient Manager React JS",
    url: "https://animal-patient-manager.vercel.app/",
    img: "https://unsplash.it/202/202",
    repo: "https://github.com/samuraiOrDev/Animal-Patient-Manager",
  },
  {
    id: "backend/1",
    title: "Api Rest Pokemon Node JS",
    img: "https://unsplash.it/202/200",
    url: "https://backend-pokemon.vercel.app/pokemon/",
    repo: " ",
  },
  {
    id: "maquetacion/1",
    title: "GameBoy Color",
    img: "/img/gameboy.png",
    url: "https://gameboy-color.vercel.app/",
    repo: "https://github.com/samuraiOrDev/gameboy-color",
  },
];
