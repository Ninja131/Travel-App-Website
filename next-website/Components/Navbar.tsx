import Image from "next/image"
import Link from "next/link"
import {NAV_LINKS} from '../constants/index';
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" max-container padding-container relative z-30 py-5 flexBetween">
        <Link href='/'>
        <Image alt="logo" src='/hilink-logo.svg' width={74} height={29}/>
        </Link>

        <ul className="hidden lg:flex gap-12 h-full">
            {NAV_LINKS.map((link)=>(
                <Link className="regular-16 text-gray-500 flexCenter cursor-pointer pb-1.5  transition-all hover:font-bold"
                 href={link.href} key={link.key}>{link.label}</Link>
            ))}
        </ul>
        
        <div
        className="lg:flex lg:justify-center lg:items-center hidden"
        >
        <Button
         type = 'button'
          title = 'Login'
          icon='/user.svg'
          variant = 'btn_dark_green'
        />
        </div>

        <Image
        src='menu.svg'
        alt='menu'
        height={24}
        width={24}
        className="inline-block cursor-pointer lg:hidden"

        />
        

    </nav>
  )
}

export default Navbar