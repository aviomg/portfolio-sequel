import Link from "next/link"
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover"



type projectcardprops={name:string,description:string, link:string, tech:string[], mini:boolean}
export default function ProjectCard({name, description, link, tech,mini}:projectcardprops){
//  const p = projects[1]
  const numtoshow=mini?2: 1000;
  const techwidgets = tech.map((item,index) => {if(index<=numtoshow-1) return <p key={index} className=" border !font-mono-code !codefont border-green-400 !text-[#579a6c] group-hover:!text-red-300  group-hover:!bg-red-300/10 group-hover:border-red-300   text-xs p-[2px] px-1 ">{item}</p>})
  const num_remaining = tech.length - numtoshow;
  const popoverlistitems=tech.map((item,index)=>{
    if(index>numtoshow-1){
      return  <p className="border !font-mono-code !codefont  text-red-300  group-hover:!bg-red-300/10 border-red-300  text-xs  p-[2px] px-1 "
      key={index}>{item}</p>
    }
  })
  const popovercontent=<div className="grid grid-cols-3 gap-x-2 gap-y-2 ">{popoverlistitems}</div>
  return( 
  <Link   onClick={(e) => {
    const target = e.target as HTMLElement;
    // If the click came from the +N trigger (or inside it), block navigation
    if (target.closest('[data-popover-trigger="true"]')) {
      e.preventDefault();   // cancel navigation
      e.stopPropagation();  // keep it from re-bubbling further
    }
  }}
   href={link} target="_blank" className="flex-1 group shadow-(--shadow) hover:shadow-(--shadow-red-300)  flex flex-col px-4 pt-4 pb-0 text-wrap border-viridian border max-sm:!w-full hover:border-red-300">
  <span className={" font-semibold text-viridian group-hover:text-red-300 " + (mini?"text-lg mb-2":"bg-pink-200 px-2 text-xl mb-4")}>{name}</span>
  <span className={"font-mono-about text-viridian group-hover:text-red-300 break-words " + (mini?"text-xs":"text-sm")}>{description}</span>
<div className="flex flex-row my-4 gap-x-4 flex-wrap gap-y-2">
  {techwidgets}
  {
    num_remaining>0?  <Popover>
    <PopoverTrigger asChild>  
      <button type="button" 
              data-popover-trigger="true" 
        className=" !font-mono-code !codefont !text-[#579a6c] group-hover:!text-red-300   hover:!bg-red-300/30  text-xs leading-[16px] hover:border-red-300 duration-100 px-[6px]  p-[2px]">
          +{num_remaining.toString()}</button>
    </PopoverTrigger>
    <PopoverContent side="right"  className="w-72 bg-base1"   onClick={(e) => e.stopPropagation()}>{popovercontent}</PopoverContent>
  </Popover>
:null  
  }
  </div>
</Link>)

    /*const techwidgets = tech.map((item,index) => <p key={index} className=" border !font-mono-code !codefont border-green-400 !text-[#579a6c] group-hover:!text-red-300  group-hover:!bg-red-300/10 group-hover:border-red-300   text-xs p-[2px] px-1 ">{item}</p>)

    return(
        <Link href={link} target="_blank" className="group shadow-(--shadow)  flex flex-col px-4 pt-4 pb-0 text-wrap border-viridian border max-sm:!w-full hover:border-red-300">
            <span className="mb-2 text-lg font-semibold text-viridian group-hover:text-red-300">{name}</span>
            <span className="font-mono-about text-sm text-viridian group-hover:text-red-300 break-words ">{description}</span>
            <div className="flex flex-row my-4 gap-x-4 flex-wrap gap-y-2">
            {techwidgets}
            </div>
        </Link>
    )*/


/*
      const p = projects[1]
  const numtoshow=2
  const techwidgets = p.tech.map((item,index) => {if(index<=numtoshow-1) return <p key={index} className=" border !font-mono-code !codefont border-green-400 !text-[#579a6c] group-hover:!text-red-300  group-hover:!bg-red-300/10 group-hover:border-red-300   text-xs p-[2px] px-1 ">{item}</p>})
  const num_remaining = p.tech.length - numtoshow;
  const popoverlistitems=p.tech.map((item,index)=>{
    if(index>numtoshow-1){
      return  <p className="border !font-mono-code !codefont  text-red-300  group-hover:!bg-red-300/10 border-red-300   text-xs p-[2px] px-1 "
      key={index}>{item}</p>
    }
  })
  const popovercontent=<div className="grid grid-cols-3 gap-x-2 gap-y-2 ">{popoverlistitems}</div>
  const testpopover = 
  <Link   onClick={(e) => {
    const target = e.target as HTMLElement;
    // If the click came from the +N trigger (or inside it), block navigation
    if (target.closest('[data-popover-trigger="true"]')) {
      e.preventDefault();   // cancel navigation
      e.stopPropagation();  // keep it from re-bubbling further
    }
  }}
   href={p.link} target="_blank" className="group shadow-(--shadow)  flex flex-col px-4 pt-4 pb-0 text-wrap border-viridian border max-sm:!w-full hover:border-red-300">
  <span className="mb-2 text-lg font-semibold text-viridian group-hover:text-red-300">{p.name}</span>
  <span className="font-mono-about text-sm text-viridian group-hover:text-red-300 break-words">{p.description}</span>
<div className="flex flex-row my-4 gap-x-4 flex-wrap gap-y-2">
  {techwidgets}
  <Popover>
  <PopoverTrigger asChild>  
    <button type="button" 
            data-popover-trigger="true" 
      className=" !font-mono-code !codefont !text-[#579a6c] group-hover:!text-red-300   hover:!bg-red-300/30  text-[14px] leading-[16px] hover:border-red-300 duration-100 px-[6px]  p-[2px]">
        +{num_remaining.toString()}</button>
  </PopoverTrigger>
  <PopoverContent side="right"  className="w-72 bg-base1"   onClick={(e) => e.stopPropagation()}>{popovercontent}</PopoverContent>
</Popover>
  </div>
</Link>
 */
    /* 
     <a id="project_1" class="group card  " href="https://studio-keys.onrender.com" target="_blank">
    <span class="card-title">Studio Keys</span>
    <span class="card-subtext">A Python-based tool designed to enable the easy retrieval and recovery 
      of UI/UX designs created with the (now) defunct Invision prototyping tool.</span>
      <div class="flex flex-row my-4 gap-x-4">
        <p class="techwidget">Python</p>
        <p class="techwidget">Flask</p>
        <p class="techwidget">GCS</p>
        <p class="techwidget">Render</p>
        <p class="techwidget">Tailwind</p>
       </div>
  </a>*/
}