import Image from "next/image";
import React from "react";
import NoCssPikachu from "/public/img/no-css-pikachu.png";
import CssPikachu from "/public/img/css-pikachu.png";
export const ImgPikachu = () => {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap mt-[20px] mb-[20px]">
      <Image
        src={NoCssPikachu}
        alt={"No CSS Pikachu"}
        className="h-[320px] w-[320px]"
      />
      <Image
        src={CssPikachu}
        alt={"CSS Pikachu"}
        className="h-[320px] w-[320px]"
      />
    </div>
  );
};
