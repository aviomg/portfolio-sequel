import Link from "next/link";
import { JSX } from "react";

export type Poem = {
    title: string,
    subtitle:string,
    date: string,
    content: string,
    archive:"true" | "false",
    slug:string ,
    filename?:string,
  }


  export const createMini = (poem:Poem, index:number,slugpage:boolean): JSX.Element=>{
    //  console.log(poem);
      const charlimit=69;
      const words = poem.content.substring(0,charlimit) + "...";
      let href=""
      console.log("slug is " + poem.slug + "for " + poem.title)
      if (slugpage){
       href=`/entries/${poem.slug}`
      }
      else{
       href= `/entries#${poem.slug}`;
      }
     
      //bg-lighterblue
      return(
         <article key={index} className="border-b border-[#E5E7EB] pt-4 pb-4 text-gray-700 container block text-left mx-auto space-y-0">
            <h1 className="font-bold text-left">
             <Link href={href} className="text-black  hover:underline transition-all duration-100 mt-3">
             {poem.date!="undefined"? 
             <>
             <p><span className="mr-1">{index}.</span>{poem.date}</p>
             <p>{poem.title}</p>
             </>:
             <p><span className="mr-1">{index}.</span>{poem.title}</p>
             }
             
             </Link>
            </h1>
            <div>
              <p className="whitespace-pre-line">{words}</p> 
            </div>
         </article>
      )
   }