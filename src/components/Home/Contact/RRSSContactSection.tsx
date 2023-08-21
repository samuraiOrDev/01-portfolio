import React from "react";
import { LogoDiscord, LogoEmail, LogoGitHub, LogoLinkedin } from "../../Svg";
import { Logo } from "../../NavBar/Logo";
import { ButtonSocialComponent } from "./ButtonSocialComponent";

const icons = [
  {
    bg: "bg-red-500",
    svg: LogoEmail,
    title: "Socail Email",
    to: "mailto:samurai.dev.ordiales@gmail.com",
  },
  {
    bg: "bg-gray-500",
    svg: LogoGitHub,
    title: "Social GitHub",
    to: "https://github.com/samuraiOrDev",
    target: "_blanck",
  },
  {
    bg: "bg-indigo-500",
    svg: LogoLinkedin,
    title: "Social Linkedin",
    to: "https://www.linkedin.com/in/v%C3%ADctor-manuel-ordiales-garc%C3%ADa-777196206/",
    target: "_blanck",
  },
];

export const RRSSContactSection = () => {
  return (
    <div className="w-full md:w-1/2">
      <div
        id="media-icons"
        className="flex flex-wrap items-center justify-center space-x-2 gap-y-2 mx-auto mt-6 md:justify-start"
      >
        {icons.map(({ bg, svg, title, to, target }, index) => (
          <ButtonSocialComponent
            bg={bg}
            svg={svg}
            title={title}
            key={index}
            to={to}
            target={target}
          />
        ))}
      </div>
      <p className="mt-6 flex flex-col items-center md:items-start justify-center text-center md:justify-start md:text-start">
        <span className="text-yellow-600 md:text-start text-center mb-3">
          Gracias por visitar mi web personal !!.
        </span>
        Espero que hayas disfrutado explorando mi trabajo y que hayas obtenido
        una idea clara de mis habilidades y experiencia.
      </p>
    </div>
  );
};
