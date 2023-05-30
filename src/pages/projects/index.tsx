import React from "react";
import { Inter } from "next/font/google";
import { Footer, Layout, NavBar } from "@/components";
const inter = Inter({ subsets: ["latin"] });
const itemsListNavBar = [
  { title: "Inicio", to: "/" },
];
export default function Projects() {
  return (
    <Layout title={""} description={""} font={inter.className}>
      <NavBar itemsListNavBar={itemsListNavBar}/>
      <h1>{"Hola buenos días!!"}</h1>
      <Footer />
    </Layout>
  );
}
