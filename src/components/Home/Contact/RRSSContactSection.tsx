import React from "react";
import { LogoDiscord, LogoEmail, LogoGitHub, LogoLinkedin } from "../../Svg";
import { Logo } from "../../NavBar/Logo";
import { ButtonSocialComponent } from "./ButtonSocialComponent";

const icons = [
    {
      bg: "bg-red-500",
      svg: LogoEmail,
      title: "Socail Email",
    },
    {
      bg: "bg-violet-500",
      svg: LogoDiscord,
      title: "Socail Discord",
    },
    {
      bg: "bg-gray-500",
      svg: LogoGitHub,
      title: "Socail GitHub",
    },
    {
      bg: "bg-indigo-500",
      svg: LogoLinkedin,
      title: "Socail Linkedin",
    },
  ];

export const RRSSContactSection = () => {
  return (
    <div className="w-full md:w-1/2">
      <div
        id="media-icons"
        className="flex flex-wrap items-center justify-center space-x-2 gap-y-2 mx-auto mt-6 md:justify-start"
      >
        {icons.map(({bg, svg, title}, index) => (
          <ButtonSocialComponent bg={bg} svg={svg} title={title} key={index}/>
        ))}
      </div>
      <p className="mt-6 flex flex-col items-center md:items-start justify-center text-center md:justify-start md:text-start">
        <span className="text-yellow-600 md:text-start text-center mb-3">
          Gracias por visitar mi portfolio!!.
        </span>
        Espero que hayas disfrutado explorando mi trabajo y que hayas obtenido
        una idea clara de mis habilidades y experiencia. ¡No dudes en
        contactarme si tienes alguna pregunta o estás interesado en trabajar
        juntos!
      </p>
    </div>
  );
};
