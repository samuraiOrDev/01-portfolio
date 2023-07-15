import Link from "next/link";
import React, { FC } from "react";
interface Props {
  title: string;
  to: string;
}

export const Item: FC<Props> = ({ title, to }) => {
  return (
    <div className="flex justify-center items-center  last:mr-0 font-bold hover:text-yellow-600 transition ease-out duration-300">
      <Link href={to} className={'cursor-pointer'} title={title}>
        {title}
      </Link>
    </div>
  );
};
