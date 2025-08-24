import Link from "next/link"

type navlinkprops={href:string,name:string,}
export default function NavLink({href,name}:navlinkprops){
  

    return(
        <li>
            {/*name=="Linkedin"? 
            <Link href={href}>
                <Image alt="linkedin" width={imgw+2} height={imgh+2} src="/linkedin-real.svg" />
                </Link>:
            name=="Github"?
            <Link href={href}>
                <Image alt="github link" width={imgw} height={imgh} src="/github.svg" />
            </Link>:
            name=="avikumar2048@gmail.com"?
            <Link href={href}>
                <Mail size={20} className="text-midblue" />
            </Link>:*/}
            
        <Link className="bg-pink-300/35  text-midblue  duration-100 sm:p-2 px-1 py-2  rounded-xs hover:bg-pink-300/20 " 
           href={href} 
           target="_blank">
            {name}</Link>
      </li>
    )
}
