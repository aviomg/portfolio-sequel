import Link from "next/link"
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

type projectcardprops={name:string,description:string, link:string, tech:string[]}
export default function ProjectCard({name, description, link, tech}:projectcardprops){
    const techwidgets = tech.map(item => <p className=" border !font-mono-code !codefont border-green-400 !text-[#579a6c] group-hover:!text-red-300  group-hover:!bg-red-300/10 group-hover:border-red-300   text-xs p-[2px] px-1 rounded-md shadow-md">{item}</p>)

    return(
        <Link href={link} target="_blank" className="group   flex flex-col w-[32%] px-4 pt-4 pb-0 text-wrap border-viridian border max-sm:!w-full hover:border-red-300">
            <span className="mb-2 text-xl font-semibold text-viridian group-hover:text-red-300">{name}</span>
            <span className="text-viridian group-hover:text-red-300 break-words">{description}</span>
            <div className="flex flex-row my-4 gap-x-4 flex-wrap gap-y-2">
            {techwidgets}
            </div>
        </Link>
    )
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