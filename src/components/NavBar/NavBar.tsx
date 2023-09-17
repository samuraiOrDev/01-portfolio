import { FC, useEffect, useRef } from "react"
import Link from "next/link"
import { LogoPrincipal } from "./Logo"
import { ItemsNavBar, TypeItemsListNavBar } from "./ItemsNavBar"
interface Props {
  itemsListNavBar: TypeItemsListNavBar[]
}
export const NavBar: FC<Props> = ({ itemsListNavBar }) => {
  const navRef = useRef<HTMLElement>(null)
  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        window.scrollY > 0
          ? navRef.current.classList.add("shadow-pro-dark")
          : navRef.current.classList.remove("shadow-pro-dark")
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])
  return (
    <nav
      ref={navRef}
      className="w-full z-[6] p-6 flex justify-center items-center bg-gray-950"
    >
      <div className="flex justify-between items-center w-full xl:max-w-[1280px] lg:flex-row flex-col">
        <Link href={"/"}>
          <LogoPrincipal />
        </Link>
        <ItemsNavBar itemsListNavBar={itemsListNavBar} />
      </div>
    </nav>
  )
}
