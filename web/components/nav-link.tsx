import Link from "next/link"

type navlinkprops={href:string,name:string}
export default function NavLink({href,name}:navlinkprops){


    return(
        <li>
        <Link className="bg-pink-300/35  hover:underline hover:text-[#6392e9] duration-100 sm:p-2 px-1 py-2 border-[1px] border-viridian shadow-md rounded-lg hover:border-lighterblue" 
           href={href} 
           target="_blank">{name}</Link>
      </li>
    )
}
