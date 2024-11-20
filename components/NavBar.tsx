import Image from "next/image"
import Link from "next/link"
import desktopLogo from "../public/airbnb-desktop.png"
import mobileLogo from "../public/airbnb-mobile.webp"
import UserNav from "./UserNav"
const NavBar = () => {
  return (
    <nav className="w-full border-b">
        <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
        <Image src={desktopLogo} alt="desktop-Logo" width={150} className="hidden lg:block"/>
        <Image src={mobileLogo} alt="desktop-Logo" width={40}  className="block lg:hidden"/>
        </Link>
        <UserNav/>
        </div>
    </nav>
  )
}

export default NavBar