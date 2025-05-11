import Link from "next/link";
import { JSX } from "react";

type coursecardprops = {course:string, description:string, notesnames:string[]|null, noteslinks:string[]|null}

export default function CourseCard({course, description, notesnames, noteslinks}:coursecardprops){
    const arroflinks:JSX.Element[] = []
    noteslinks?.forEach((link, index)=>{
        const element = <Link className="text-viridian font-bold text-sm hover:text-[#6bc9b2] transition-all duration-75 max-w-min border-viridian" href={link}>
                        <pre className="code-block language-python max-w-fit !border-transparent !bg-transparent !px-0 !mr-1 !py-0"><code className="!border-green-400 !border !px-1 !text-viridian hover:!bg-green-300 hover:!bg-300/100 !bg-green-300/40 transition-all duration-100
                        ">{notesnames? notesnames[index]: "notes"}</code></pre></Link>
        arroflinks.push(element);
    })
   
    
    return(
    <div className="lg:max-xl:w-[30%] px-5 py-2 rounded-lg  w-full md:w-[48%] lg:w-[24%] shadow-md bg-purple-300/30  shadow-neonpurp hover:shadow-[#725295] hover:bg-purple-300/40 transition-all duration-150  flex flex-col">
    <h1 className="text-lg min-h-14 font-bold text-[#5941a9]">{course}</h1>
    <p className={description.includes("Coming Soon")? "text-xs text-gray-700 min-h-fit lg:min-h-12 italic": "text-xs text-gray-700 min-h-fit lg:min-h-12"}>{description}</p>
    {noteslinks? <div className="flex gap-1">
           {arroflinks}
    </div>:null}
  </div>
    )
}

/*
  <div class="widget">
    <h1 class="widget-title">COMP 550: Algorithms and Analysis</h1>
    <p class="widget-content">Key Topics: Problem-solving paradigms, Computational complexity, Algorithm design</p>
    <div class="flex gap-1">
    <a href="./notes/comp550.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
    <a href="./notes/code.html" class="widget-notes"><pre class="code-block language-python max-w-fit !bg-transparent !py-0 !mr-1 !text-viridian !px-0"><code class="code-notes">code</code></pre></a>
    </div>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 435: Computer Security Concepts</h1>
    <p class="widget-content">Key Topics: The CIA triad; Cryptography; Software, Network, and OS security</p>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 311: Computer Organization</h1>
    <p class="widget-content">Key Topics: Assembly Programming, Microprocessor and CPU Design, Combinational and Sequential Logic</p>
    <a href="./notes/comp311.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 590: Foundations of Software Engineering</h1>
    <p class="widget-content">Key Topics: Agile Project Management, Full-stack & Production-grade Development, Technical Communication, 
      Automation and Code Review</p>
      <a href="./notes/comp590.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 455: Models of Languages and Computation</h1>
    <p class="widget-content">Key Topics: Automata, Computability, and Complexity theories; Reducibility; Time and Space Complexity</p>
      <a href="./notes/comp455.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 301: Foundations of Programming</h1>
    <p class="widget-content">Key Topics: Object-Oriented Programming, Exception handling, Software Testing, Design Patterns </p>
    <a href="./notes/comp301.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 211: Systems Fundamentals</h1>
    <p class="widget-content">Key Topics: Systems Programming (C), Compilation system, Physical/Virtual memory, OS basics </p>
    <a href="./notes/comp211.html" class="widget-notes"><pre class="code-block language-python pre1"><code class="code-notes">notes</code></pre></a>

  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 210: Data Structures and Analysis</h1>
    <p class="widget-content">Key Topics: Fundamental Data structures, Big-O Notation and Algorithm Analysis</p>
  </div>
  <div class="widget">
    <h1 class="widget-title">COMP 283: Discrete Structures</h1>
    <p class="widget-content">Key Topics: Combinatorics; Sets, tuples, etc.; Logic and Proof Techniques</p>
  </div>

*/