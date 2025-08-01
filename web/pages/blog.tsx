import Navbar from "@/components/nav-bar";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import matter from 'gray-matter'
import { orderedPoems } from '../utils/data';
import { useRouter } from "next/router";
import fs from 'fs';
import path from 'path';
import Head from "next/head";
import Image from "next/image";

export type Poem = {
   title: string,
   subtitle:string,
   date: string,
   content: string,
   archive:string
 }

 const createMini = (poem:Poem, index:number): JSX.Element=>{
   //  console.log(poem);
     const charlimit=69;
     const words = poem.content.substring(0,charlimit) + "...";
     const href= `/entries#poem${index}`
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


export default function Blog({ poems }: { poems: Poem[] }){
   const numPoems=5;
   const [poems1,setPoems1] = useState<Poem[]>(poems);
   const ent = poems1.slice(0,numPoems).map((poem,index)=>createMini(poem,index+1))
   const [entries, setEntries] = useState<JSX.Element[]>(ent);
   const [listend, setlistend] = useState<boolean>(false);
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   const [btn, setbtn] = useState<string>("");
   const router = useRouter();
   
   useEffect(()=>{
      console.log(btn);
      const el  = document.getElementById(btn);
      el?.scrollIntoView();

   },[btn]);


  /* useEffect(()=>{
      Promise.all(
         orderedPoems.map(async (file) =>{
            const res = await fetch(`/poem-files/${file}`);
            const text = await res.text();
            const {data, content} = matter(text);

            return{
               title:data.title || "undefined",
               subtitle: data.subtitle || "undefined",
               date: data.date || "undefined",
               archive: data.archive || "false",
               content
            }
         })
      ).then((results)=>{
         setPoems1(results);
         let temp:JSX.Element[] = []; //what we will set entries to
         results.forEach((poem, index)=>{
            if(index < numPoems){
               const item = createMini(poem, index+1);
               temp.push(item);
               //generate the list item by calling create mini
               //append it to the entries state variable
            }
         })
         setEntries(temp);
      })
   },[])*/
      

   const loadMore = ():void=>{
      const last_rendered = entries.length;
     // console.log(last_rendered);
      
      Promise.all(
         orderedPoems.map(async (file) =>{
            const res = await fetch(`/poem-files/${file}`);
            const text = await res.text();
            const {data, content} = matter(text);

            return{
               title:data.title || "undefined",
               subtitle: data.subtitle || "undefined",
               date: data.date || "undefined",
               archive:data.archive || "false",
               content
            }
         })
      ).then((results)=>{
         setPoems1(results);
       //  console.log(results)
         const temp:JSX.Element[] = []; //what we will set entries to

         if ((last_rendered + 5)>=poems1.length){
            //aka we r almost at the end
         //   console.log("blah")
            setlistend(true);
         }
         let counter=0;
         let ind = last_rendered;
         for(let i=last_rendered;i<poems1.length;i++){
            if(counter<5){
               const item = createMini(poems1[i], ind+1);
               temp.push(item)
               ind++;
               counter++;

            }
         }
         setEntries(entries =>{
            return  [...entries,...temp];
         });
        
       
      })

   }
   return (
      <>
              <Head>
        <title>Avi Kumar | Blog</title>
        <link rel="canonical" href="https://jahnavikumar.org/blog" />

      <meta name="description" content="a space to record, categorize, and document some of the things I do and think and make! a scrapbook of my life (an interface for my brain?). 
                                       you can find my poems and other tidbits below."/>
      <meta name="keywords" content="blog, poetry, poet, poems, prose, writing, journal, diary, creative, art, swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Avi Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Avi Kumar | Blog" />
        <meta property="og:description" content="a space to record, categorize, and document some of the things I do and think and make! a scrapbook of my life (an interface for my brain?). 
                                       you can find my poems and other tidbits below." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jahnavikumar.org" />
        <meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
        <meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        </Head>

   <div className="flex-grow mb-10">
   <Navbar currentpage="Blog"/>
   <section className="pb-6">
     <div className="container mx-auto text-center">
     <h2 className="text-4xl font-serif font-bold mb-4 text-puce">my blog</h2>
     <p className="text-lg text-gray-700">a space to record, categorize, and document some of the things I do 
    and think and make! a scrapbook of my life (an interface for my brain?).</p>
     </div>
   </section>

   <div className="flex justify-center items-center gap-4 mb-8 text-center">
      <Link href="/crochet" className="inline-block sm:w-1/5 md:max-lg:w-[50%] lg:max-xl:w-[40%] w-4/5 mx-auto">
      <div className="relative w-full h-[300px] overflow-clip  shadow-puce hover:shadow-pink-600 shadow-md border-2 border-puce">
         <Image
         src="/crochet/IMG_9727.webp"
         alt="crochet image"
         fill
         className="object-cover"/>
      </div>
         <h1 className="mt-2 text-center text-pink-400">(click for more crochet)</h1>
      </Link>
   </div>

   <div className="bg-viridian/30 mx-32 max-sm:mx-6">
      <div id="thumbnail" className="max-w-5xl mx-auto pb-8 pt-6 px-6 text-center">
         <Link href="/entries">
         <h1 className="text-lighterblue text-xl font-bold px-2 py-1 mb-2 hover:bg-blue-200 hover:bg-opacity-70 
                        border-2 border-lighterblue hover:border-lighterblue  hover:text-lighterblue  transition-all 
                        duration-75 max-w-fit text-center mx-auto">
               All Posts</h1>
         </Link>
      
      <div id="poetry-preview" className="text-left text-gray-700">
         <hr className="text-[#E5E7EB]"/>
      {entries}
      </div>
      <a id="loadmore">
       
      <button className="text-black mt-4 px-4 text-lg font-bold text-left shadow-md bg-lighterblue hover:bg-[#4780ea] transition all duration-75 rounded-md max-w-fit"
            onClick={listend? ()=>{router.push("/entries")}:loadMore}>{listend? "see all" : "more"}</button>
      </a>
      </div>
   </div>


</div>
</>)
}


export async function getStaticProps() {
   const poemsDir = path.join(process.cwd(), 'public/poem-files');
   const poems = orderedPoems.map((filename) => {
     const filePath = path.join(poemsDir, filename);
     const fileContents = fs.readFileSync(filePath, 'utf8');
     const { data, content } = matter(fileContents);
 
     return {
       title: data.title || "undefined",
       subtitle: data.subtitle || "undefined",
       date: data.date || "undefined",
       archive: data.archive || "false",
       content,
     };
   });
 
   return {
     props: {
       poems,
     },
   };
 }
 

