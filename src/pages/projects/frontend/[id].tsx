import { Footer, Layout, NavBar } from '@/components'
import React from 'react'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })
const itemsListNavBar = [
  { title: "Inicio", to: "/" },
  {title: "Proyectos",to: "/projects",}
];
const Project = () => {
  return (
    <Layout  title={'Project | Víctor Manuel'} description={''} font={inter.className} >
        <NavBar itemsListNavBar={itemsListNavBar}/>
        <h1>Project | Víctor Manuel Ordiales García</h1>
        <Footer />
    </Layout>
  )
}

export default Project