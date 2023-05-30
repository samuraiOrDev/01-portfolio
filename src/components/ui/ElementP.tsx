import React, { FC } from "react";

interface Props {
  description: string;
  card?: boolean;
  about?: boolean;
}
export const ElementP: FC<Props> = ({ description, card, about }) => {
  const textColor = about ? "text-white" : "text-[#d1cccce2]"
  return (
    <>
      {card == true ? (
        <p className="sm:text-[16px] text-[14px] sm:leading-[23px] leading-[20px] sm:w-[85%] w-[100%] font-normal text-[#d1cccce2] mt-2 text-start">
          {description}.
        </p>
      ) : (
        <p className={`sm:text-[20px] text-[16px] sm:leading-[27px] leading-[23px] xl:w-[65%] sm:w-[75%] w-[100%] ${textColor} mt-4 font-normal text-center mx-auto`}>
          {description}.
        </p>
      )}
    </>
  );
};
