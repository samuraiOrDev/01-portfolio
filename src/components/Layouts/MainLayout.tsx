import Head from "next/head";
import React, { FC } from "react";
import { useRouter } from "next/router";

import { NavBar } from "../NavBar";
import { Footer } from "../Footer";

interface TypeMainLayout {
  children: React.ReactNode;
  title: string;
  description: string;
  author?: string;
  font: string;
}

export const MainLayout: FC<TypeMainLayout> = ({
  children,
  title = "",
  description = "",
  author,
  font,
}) => {
  const { pathname } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const canonicalURL = `${origin}${pathname}`;
  const itemsListNavBar = [
    { title: "Inicio", to: "#hero-section" },
    { title: "Sobre mí", to: "#about-section" },
    { title: "Contacto", to: "#contact-section" },
    { title: "Proyectos", to: "#projects-section" },
  ];
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="generator" content="Next.js 13" />
        <meta name="author" content={author} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={canonicalURL} />
        <meta property="og:title" content={title} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={canonicalURL} />
        <meta property="og:locale" content="es_ES" />
        <meta
          name="description"
          property="og:description"
          content={description}
        />
        <meta property="og:site_name" content="PortFolio | Samurai.Dev.Ord" />
        <meta name="robots" content="noindex" />
      </Head>
      <div className={`bg-gray-950 text-[#A3B3BC] ${font}`}>
        <NavBar itemsListNavBar={itemsListNavBar} />
        {children}
        <Footer />
      </div>
    </>
  );
};
