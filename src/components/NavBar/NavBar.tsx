import { FC, useEffect } from "react";
import Link from "next/link";
import { LogoPrincipal } from "./Logo";
import { ItemsNavBar, TypeItemsListNavBar } from "./ItemsNavBar";
interface Props {
  itemsListNavBar: TypeItemsListNavBar[];
}
export const NavBar: FC<Props> = ({ itemsListNavBar }) => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.querySelector("nav") as HTMLElement;
      nav && window.scrollY > 0
        ? nav.classList.add("shadow-pro-dark")
        : nav.classList.remove("shadow-pro-dark");
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    /* fixed */
    <nav className="w-full z-[6] p-6 flex justify-center items-center bg-gray-950">
      <div className="flex justify-between items-center w-full xl:max-w-[1280px] lg:flex-row flex-col">
        <Link href={"/"}>
          <LogoPrincipal />
        </Link>
        <ItemsNavBar itemsListNavBar={itemsListNavBar} />
      </div>
    </nav>
  );
};
