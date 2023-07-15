import { ContextAsPath } from "@/context/ProviderAsPath";
import Link from "next/link";
import React, { FC } from "react";
import { useContext } from "react";
interface Props {
  title: string;
  to: string;
}

export const Item: FC<Props> = ({ title, to }) => {
  const { asPathURL } = useContext(ContextAsPath);
  const activesClassName =
    asPathURL === to
      ? "cursor-pointer text-yellow-600"
      : "cursor-pointer";
  return (
    <div className="flex justify-center items-center  last:mr-0 font-bold hover:text-yellow-600 transition ease-out duration-300">
      <Link href={to} className={activesClassName} title={title}>
        {title}
      </Link>
    </div>
  );
};
