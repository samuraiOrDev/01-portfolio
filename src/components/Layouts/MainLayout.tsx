import Head from "next/head"
import React, { FC } from "react"
import { useRouter } from "next/router"
import { NavBar } from "../NavBar"
import { Footer } from "../Footer"
import { ScrollButtonComponent } from "../ui/ScrollButtonComponent"

interface TypeMainLayout {
  children: React.ReactNode
  title: string
  description: string
  author?: string
  font: string
}

export const MainLayout: FC<TypeMainLayout> = ({
  children,
  title = "",
  description = "",
  author,
  font,
}) => {
  const { pathname } = useRouter()
  const origin =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : ""
  const canonicalURL = `${origin}${pathname}`
  const itemsListNavBar = [
    { title: "Inicio", to: "/" },
    { title: "Proyectos", to: "/projects" },
    { title: "Blog", to: "/blog" },
  ]
  const metaTags = [
    { name: "description", content: description },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "generator", content: "Next.js 13.4.3" },
  ]
  return (
    <>
      <Head>
        <title>{title}</title>
        {metaTags.map((tag, index) => (
          <meta key={index} name={tag.name} content={tag.content} />
        ))}
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
        <meta property="og:site_name" content="PortFolio | Samuraior.dev" />
        {/*<meta name="robots" content="noindex" />*/}
      </Head>
      <div className={`bg-gray-950 text-[#A3B3BC] ${font}`}>
        <NavBar itemsListNavBar={itemsListNavBar} />
        {children}
        <ScrollButtonComponent />
        <Footer />
      </div>
    </>
  )
}
