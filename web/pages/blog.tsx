import Navbar from "@/components/nav-bar";
import Link from "next/link";
import { JSX, useEffect, useState } from "react";
import matter from 'gray-matter'
import { orderedPoems } from '../utils/data';
import ReactMarkdown from 'react-markdown'
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

export type Poem = {
   title: string,
   subtitle:string,
   date: string,
   content: string,
   archive:string
 }

export default function Blog(){
   const [entries, setEntries] = useState<JSX.Element[]>([]);
   const [poems,setPoems] = useState<Poem[]>([]);
   const numPoems=5;
   const charlimit=60;
   const [listend, setlistend] = useState<boolean>(false);
   const [btn, setbtn] = useState<string>("");
   const router = useRouter();
   
   useEffect(()=>{
      console.log(btn);
      const el  = document.getElementById(btn);
      el?.scrollIntoView();

   },[btn]);

   const createMini = (poem:Poem, index:number): JSX.Element=>{
    //  console.log(poem);
      const charlimit=60;
      const words = poem.content.substring(0,60) + "...";
      const href= `/entries#poem${index}`
      const id = `poem${index}`;
      return(
         <article  className="border-b border-[#E5E7EB] pt-4 pb-4 text-gray-700 container block text-left mx-auto space-y-0">
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

   useEffect(()=>{
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
         setPoems(results);
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
   },[])

   /*useEffect(() => {
      fetch('/assets/nyc.txt')
        .then((res) => res.text())
        .then((text) => {
          const rawPoems = text.split('\n\n\n').map((poem)=>poem.trim());

          let counter = 0;
          const temp:JSX.Element[] = [];
          rawPoems.forEach((poem,index=2)=>{
           if(counter < numPoems){
              const articleid = index+1
              const item = createMini(poem,articleid, 60,5);
              temp.push(item)
           }
           counter++;
          })
          setEntries(temp);
        })
        .catch(() => console.log('error'))
    }, [])*/

 
  
   //a function to identify the 5 most recent entries in nyx.txt
//a function to convert the contents of a given entry into the tailwind stlyed element
//a function to add the styling for rest of stuff
//and we will insert the variables into the tsx at the end!
      

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
         setPoems(results);
       //  console.log(results)
         let temp:JSX.Element[] = []; //what we will set entries to

         if ((last_rendered + 5)>=poems.length){
            //aka we r almost at the end
         //   console.log("blah")
            setlistend(true);
         }
         let counter=0;
         let ind = last_rendered;
         for(let i=last_rendered;i<poems.length;i++){
            if(counter<5){
               const item = createMini(poems[i], ind+1);
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
   <div className="flex-grow">
   <Navbar currentpage="Blog"/>
   <section className="pb-6">
     <div className="container mx-auto text-center">
     <h2 className="text-4xl font-serif font-bold mb-4 text-viridian">avi kumar's blog</h2>
     <p className="text-lg text-gray-700">a place to host, categorize, and document some of the things I do 
    and think and make. a scrapbook of my life (an interface for my brain?).</p>
     </div>
   </section>

   <div className="flex justify-center items-center gap-4 mb-8 text-center">
      <Link href="/crochet" className="inline-block sm:w-1/5 md:max-lg:w-[50%] lg:max-xl:w-[40%] w-4/5 mx-auto">
         <img src="/crochet/IMG_9727.webp" alt="image 2" className="w-full h-[300px] object-cover overflow-clip rounded-sm shadow-puce hover:shadow-pink-600 shadow-md border-2 border-puce"/>
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


</div>)
}


