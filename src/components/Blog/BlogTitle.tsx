import React from "react";
import { ElementH2, ElementP } from "../ui";

export const BlogTitle = () => {
  return (
    <div className="mt-[160px] p-10 text-center">
      <ElementH2 mainTitle={"Bienvenido a mi"} mainTitleTail={"Blog"} />
      <ElementP description={"Descripción básica de lo que es el blog"} />
    </div>
  );
};
