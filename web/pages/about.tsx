import Navbar from "@/components/nav-bar";
import Link from "next/link";


export default function AboutPage(){

    return(
        <div className="flex-grow min-h-[calc(100svh)] bg-[#acd7bb]  flex flex-col text-center gap-x-5 text-about-text">
            <Navbar currentpage="About" />
            <div className="mx-15 mb-9 items-center">
                <h2 className="text-4xl font-bold  mb-4 ml-auto text-about-primary">about me</h2>
                <div className="flex flex-row">
                    <div className="px-10">
                        <span className="font-mono-normal text-about-text">
                        Hi! My name is Avi. I'm a third-year CS and French double major at UNC-Chapel Hill. My favorite things to do are to learn and to create. If you asked anyone
                    who knew me to describe me in one word, they'd probably say "curious". Outside of computer science and computer engineering, my top academic interests are in linguistics and environmentalism. I am fluent in Hindi and French, and a learning beginner in Spanish. In my free time, I enjoy
                        </span>
                        <span className="font-mono-normal text-about-primary underline">
                            <Link href="/entries"> writing</Link>
                        </span>
                        <span className="font-mono-normal text-about-text">, </span>
                        <span className="font-mono-normal text-about-primary underline">
                            <Link href="/crochet">crocheting</Link>
                        </span>
                        <span className="font-mono-normal text-about-text"> (or another creative outlet--like this website), thrift shopping, spending time with friends, and thinking about the things I'm learning. Thanks for visiting!</span>
                    </div>
                    <img src="/me.jpeg" className="max-w-[22%] border-about-secondary border-[3px] object-cover" />
                </div>
            </div>
            <section className="text-left bg-antiquewhite px-5 mx-5 mb-4 border-2 border-[#204d4a]">
                <h2 className="text-2xl mb-[5px] font-bold mt-2">Experience</h2>
              <ResumeWidget title="Teaching Assistant (COMP 211: System Fundamentals), UNC CS Department" timerange="January 2024-Present" description="Provide office hours for students; grade homework and exams; contribute to writing exam questions and homework auto-graders; lecture assistance" />
                </section> 
           
        </div>
    )
}

type resumeprops = {
    title:string,
    description:string,
    timerange:string
}

function ResumeWidget({title, description, timerange}:resumeprops){
    return(
        <div className="flex flex-row justify-between">
            <div className="flex flex-col mt-1 max-w-3/4">
            <h2 className="text-about-secondary bg-[#fccaca80] mt-[2px] font-mono-normal! underline">
                {title}
            </h2>
            </div>
        </div>
    )
}