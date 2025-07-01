import Link from "next/link";

export default function Navbar({currentpage}){
    const pages = [{title:"Home",link:"/#cont"},{title: "About",link:"/about"},{title:"Blog",link:"/blog"},{title:"Notes",link:"/notes"},{title:"Crochet",link:"/crochet"}]
    let listitems = pages.map(page => 
        page.title==currentpage?   <li><Link href={page.link} className="text-puce underline">{page.title}</Link></li>:
        <li><Link href={page.link} className="underline hover:text-puce duration-150 "> {page.title}</Link></li>
    )
  
    return(
        <div id="cont" className="pb-5 pt-5 text-center container mx-auto text-eggplant">
                    <ul className="justify-center flex space-x-4 text-viridian font-bold">
                        {listitems}
                        </ul>
                        </div>

    )
}
/*

        <div id="cont" className="pb-5 pt-5 text-center container mx-auto text-eggplant">
        <ul className="justify-center flex space-x-4 text-viridian font-bold">
          <li><Link href="/" className="text-puce underline">Home</Link></li>
          <li><Link href="/" className="underline hover:text-puce duration-150">About</Link></li>
          <li><Link href="/blog" className=" underline hover:text-puce duration-150 ">Blog</Link></li>
          <li><Link href="/" className="underline hover:text-puce duration-150 "> Notes</Link></li>
          <li><Link href="/crochet" className=" underline hover:text-puce duration-150">Crochet</Link></li>
        </ul>
    </div> */