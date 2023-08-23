import Link from "next/link";
import React, { FC } from "react";
import type { IconType } from "react-icons";

interface Props {
  icon: IconType;
  to: string;
  title: string;
  target?: string;
}
export const Icon: FC<Props> = ({ icon: Icon, to, target, title }) => {
  return (
    <Link href={to} target={target} className=" cursor-pointer" title={title}>
      <Icon className="mr-4 text-[#A3B3BC] dark:text-[#A3B3BC] text-[24px] hover:text-yellow-600 transition ease-out duration-300" />
    </Link>
  );
};
