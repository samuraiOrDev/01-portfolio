import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
interface Props {
  title: string;
  to: string;
}
import { useRouter } from "next/router";

export const Item: FC<Props> = ({ title, to }) => {
  const router = useRouter();
  const [currentRoute, setCurrentRoute] = useState("");

  useEffect(() => {
    setCurrentRoute(router.asPath);
  }, [router.asPath]);
  console.log(currentRoute);

  let classNameActive = "";
  if (currentRoute.includes("/blog") && to == "/blog") {
    classNameActive = "text-yellow-600";
  } else if (currentRoute.includes("/projects") && to == "/projects") {
    classNameActive = "text-yellow-600";
  } else if (
    to === "/" &&
    !currentRoute.includes("/blog") &&
    !currentRoute.includes("/projects")
  ) {
    classNameActive = "text-yellow-600";
  }
  return (
    <div
      className={`flex justify-center items-center  last:mr-0 font-bold hover:text-yellow-600 transition ease-out duration-300 ${classNameActive}`}
    >
      <Link href={to} className={"cursor-pointer"} title={title}>
        {title}
      </Link>
    </div>
  );
};
