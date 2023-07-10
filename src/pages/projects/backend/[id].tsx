import { Footer, ProjectsLayouts, NavBar } from '@/components'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const itemsListNavBar = [
  { title: "Inicio", to: "/" },
  {title: "Proyectos",to: "/projects",}
];
const Project = () => {
  return (
    <ProjectsLayouts  title={'Project | Víctor Manuel'} description={''} font={inter.className} >
        <NavBar itemsListNavBar={itemsListNavBar}/>
        <h1>Project | Víctor Manuel Ordiales García</h1>
        <Footer />
    </ProjectsLayouts>
  )
}

export default Project