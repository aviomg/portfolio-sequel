import Link from "next/link";

type props={currentpage:string}

export default function Navbar({currentpage}:props){
    const pages = [{title:"Home",link:"/#cont",id:1},{title: "About",link:"/about",id:2},{title:"Blog",link:"/blog",id:3},{title:"Notes",link:"/notes",id:4},
        {title:"Crochet",link:"/crochet",id:5},{title:"Poetry",link:"/entries",id:6}]
    const listitems = pages.map(page => 
        page.title==currentpage?   <li key={page.id}><Link  href={page.link} className="text-puce ">{page.title}</Link></li>:
        <li key={page.id}><Link  href={page.link} className="hover:underline hover:text-puce duration-150 "> {page.title}</Link></li>
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