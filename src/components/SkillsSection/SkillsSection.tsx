import React from "react";
// Components && Data
import { SkillsTitle } from "./SkillsTitle";
import { SkillsSectionContent } from "./SkillsSectionContent";
import { LogoAstro, LogoBootstrap, LogoCss, LogoHtml, LogoJava, LogoJavaScript, LogoMongoDB, LogoNext, LogoNode, LogoReact, LogoSpring, LogoTailWindCss, LogoTypeScript, LogoVite } from "../Svg";
import { SkillSectionTabs } from "./SkillSectionTabs";
interface Props {
  height?: string;
}
interface TypeSkill {
  id: number;
  component: React.FC<{height?: string}>;
  title: string;
  description: string;
  urlDoc: string;
}

const skills: TypeSkill[] = [
  {
    id: 1,
    component: LogoJavaScript,
    title: "JavaScript",
    description:
      "Lenguaje de programación cuyo uso principal es crear páginas webs interactivs.",
    urlDoc: "https://developer.mozilla.org/es/docs/Web/HTML",
  },
  {
    id: 2,
    component: LogoAstro,
    title: "Astro",
    description:
      "Framework web todo en uno para crear páginas web rápidas y centradas en el contenido.",
    urlDoc: "https://astro.build/",
  },
  {
    id: 3,
    component: LogoTailWindCss,
    title: "Tailwind CSS",
    description:
      "Framework de Css para el diseño de páginas web haciendo uso de pseudo clases.",
    urlDoc: "https://tailwindcss.com/",
  },
  {
    id: 4,
    component: LogoHtml,
    title: "HTML",
    description: "Lenguaje de marcado para la creación de páginas web.",
    urlDoc: "https://developer.mozilla.org/es/docs/Web/HTML",
  },{
    id: 5,
    component: LogoCss,
    title: "Css",
    description: "Lenguaje de estilos para la creación de páginas web.",
    urlDoc: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    id: 6,
    component: LogoReact,
    title: "React",
    description: "Librería de JavaScript para la creación de interfaces de usuario.",
    urlDoc: "https://es.reactjs.org/",
  },
  {
    id: 7,
    component: LogoNext,
    title: "Next",
    description: "Framework de React para la creación de aplicaciones web.",
    urlDoc: "https://nextjs.org/",
  },
  {
    id: 8,
    component: LogoTypeScript,
    title: "TypeScript",
    description: "Lenguaje de programación tipado que se compila a JavaScript.",
    urlDoc: "https://www.typescriptlang.org/",
  },
  {
    id: 9,
    component: LogoNode,
    title: "Node",
    description: "Entorno de ejecución para JavaScript construido con V8, motor de JavaScript de Chrome.",
    urlDoc: "https://nodejs.org/es/",
  },
  {
    id: 10,
    component: LogoJava,
    title: "Java",
    description: "Plataforma informática de lenguaje de programación creada por Sun Microsystems en 1995.",
    urlDoc: "https://docs.oracle.com/en/java/",
  },
  {
    id: 11,
    component: LogoSpring,
    title: "Spring",
    description: "Framework de Java para el desarrollo de aplicaciones web.",
    urlDoc: "https://spring.io/",
  },
  {
    id: 12,
    component: LogoVite,
    title: "Vie JS",
    description: "Empaquetador de Js usa esbuil para trabjar con las dependencias.",
    urlDoc: "https://vitejs.dev/",
  }, 
  {
    id: 13,
    component: LogoBootstrap,
    title: "Bootstrap",
    description: "Framework de Css para el diseño de páginas web.",
    urlDoc: "https://getbootstrap.com/",
  },
  {
    id: 14,
    component: LogoMongoDB,
    title: "MongoDB",
    description: "Base de datos NoSQL orientada a documentos.",
    urlDoc: "https://www.mongodb.com/es", 
  }
];
export const SkillsSection = () => {
  return (
    <section
      className="flex justify-center items-center sm:px-16 px-6 sm:pb-16 xs:pb-8 pb-12 sm:pt-6 mt-[40px] overflow-x-hidden"
      id="skills-section"
    >
      <div className="flex justify-center items-center xl:max-w-[1280px] w-full pt-[100px] flex-col mx-auto gap-5">
        <SkillsTitle />
        {/* <SkillsSectionContent>
          
          <div className="flex flex-col md:flex-row gap-y-5 md:gap-x-3 md:flex-wrap">
            {skills.map(
              (
                { id, title, description, urlDoc, component: SvgSkill},
                index
              ) => (
                <CardSkill
                  key={id}
                  svgComponent={SvgSkill}
                  title={title}
                  description={description}
                  urlDoc={urlDoc} />
              )
            )}
          </div>
        </SkillsSectionContent> */}

        <SkillsSectionContent>
          <SkillSectionTabs />
        </SkillsSectionContent>
      </div>
    </section>
  );
};
