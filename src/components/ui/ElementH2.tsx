import React, { FC } from "react";

interface Props {
  mainTitle: string;
  mainTitleTail?: string;
  lineBreak?: boolean;
  textGradient?: boolean;
}
export const ElementH2: FC<Props> = ({
  mainTitle,
  mainTitleTail,
  lineBreak = false,
  textGradient = false,
}) => {
  return (
    <div>
      {(lineBreak == false && mainTitleTail ) && (
        <h2 className="text-white font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
          {mainTitle} <span className="text-gradient-h1">{mainTitleTail}</span>
        </h2>
      )}
      {(!mainTitleTail && !textGradient) &&  (
        <h2 className="text-white font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
          {mainTitle}
        </h2>
      )}
      {lineBreak && mainTitleTail && (
        <h2 className="text-white font-bold sm:text-[48px] sm:leading-[60px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-start">
          {mainTitle} <br />
          <span className="text-gradient-h1" style={{marginLeft: "40px"}}>
            {mainTitleTail}
          </span>
        </h2>
      )}
      {(!mainTitleTail && textGradient) && (
        <h2 className="text-gradient-h1 font-bold sm:text-[48px] sm:leading-[52px] text-[30px] leading-[36px] xs:tracking-[-0.5%] tracking-[-0.25%] text-center">
          {mainTitle}
        </h2>
      )}
      
    </div>
  );
};
