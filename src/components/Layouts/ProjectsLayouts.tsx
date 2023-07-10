import Head from "next/head";
import React, { FC } from "react";
import { useRouter } from "next/router";
interface Props {
  children: React.ReactNode;
  title: string;
  description: string;
  author?: string;
  font: string;
}
export const ProjectsLayouts: FC<Props> = ({children, title = "", description = "", author, font}) => {
  const { pathname } = useRouter();
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const canonicalURL = `${origin}${pathname}`;
  return <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="generator" content="Next.js 13" />
                <meta name="author" content={author} />
                <link rel="icon" href="/favicon.ico" />
                {/* Page Metadata */}
                <link rel="canonical" href={canonicalURL} />
                {/* OpenGraph Tags */}
                <meta property="og:title" content={title} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={canonicalURL} />
                <meta property="og:locale" content="es_ES" />
                {/* <meta property="og:image" content="es_ES" /> */}
                {/* <meta property="og:image:alt" content={imageAlt} /> */}
                <meta name="description" property="og:description" content={description} />
                <meta property="og:site_name" content="PortFolio | Samurai.Dev.Ord" />
            </Head>
            <div className={`bg-gray-950 text-[#A3B3BC] ${font}`} >{children}</div>
        </>;
};
