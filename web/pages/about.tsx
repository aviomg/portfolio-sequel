import Navbar from "@/components/nav-bar";
import Head from "next/head";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import ExpandableDescription from "@/components/expandable-description";
import { Dot } from "lucide-react";
import CourseCard from "@/components/course-card";
import { Course, getCourses } from "@/lib/notion";

type Props = {
    courses: Course[];
  };

export default function AboutPage({ courses }: Props) {
    const title = "eCommerce Software Engineer & Lead Web Analytics Architect"
    const company = "Bausch + Lomb"
    const timerange = "August 2023-Present"
    const titleintern="IT/eCommerce Intern"
    const descriptionintern="Contributed to front-end optimization, tooling development, and UX improvement projects for Bausch+Lomb’s eCommerce platform, working across Python, CSS/LESS, and SAP Commerce Cloud/hybris environments. Two-month summer internship extended to part-time Frontend developer position, based on superior performance review."
    const timerangeintern="June - August 2023"
    const listitemsintern=[{title:"Built a Python tool to recover ~700 obsolete UI mockups from a defunct design tool, restoring critical design assets for ongoing projects. Github"},
    {title:"Researched and delivered internal training and recommendations to optimize use and improve tool adoption of Dynatrace application monitoring"},
 {title:"Led a cross-functional initiative to resolve a design inconsistency on the eCommerce global platform, presenting a UX-aligned solution to international marketing teams and delivering developer-ready user stories and acceptance criteria."},
 {title:"Audited redundant LESS/CSS in enterprise eCommerce site; delivered a technical plan for CSS refactoring and optimization to improve maintainability and site performance."}]
    const description = "I design, build, and optimize front-end features, analytics integrations, and internal software tools for Bausch + Lomb’s global eCommerce platform. My work blends software engineering, UI/UX development, and front-end development in SAP Commerce Cloud to deliver scalable, maintainable solutions that improve customer experience and internal analytics capabilities."
    const listitems = [{
        title: "Web Analytics System Architect and Lead Developer",
        sub: "Built a JS-based analytics tracking framework from scratch in Piwik Pro Tag Manager; lead end-to-end design, implementation, and testing of advanced JavaScript tags to capture eCommerce and CX KPIs; serve as the company’s primary expert in Piwik Pro web analytics."
    },
    {
        title: "Front-end Developer, CX Dashboard",
        sub: "Co-designer of a multi-tab self-service customer dashboard; designed 20+ widgets and dashboard prototypes in Figma; developed front-end HTML components; Built a reusable SCSS architecture to ensure scalability and maintainability of front-end code."
    },
    {
        title: "UI/UX Design, CX Acceleration Project",
        sub: "Took over unfinished and unstarted mockups from a departing UI/UX designer, producing polished Figma prototypes for high-priority eCommerce pages to be implemented in a major site refresh."
    },
    {
        sub: "Co-owner of company-wide Web Analytics Center of Excellence, establishing governance, reusable code patterns, and analytics enablement for IT and business stakeholders.",
        title: "Web Analytics Center of Excellence"
    }
    ]
    //const wordlimit = 80;
    //const words = description.split(" ")
    /*const titleitem = <Collapsible>
        <CollapsibleTrigger>
        <p className="leading-[1.5rem] text-sm text-left mb-[15px] mt-2.5 font-mono-about">{words.slice(0,wordlimit).join(" ")}</p>

        </CollapsibleTrigger>
        <CollapsibleContent>
            {words.slice(wordlimit, description.length).join(" ")}
        </CollapsibleContent>
    </Collapsible>*/
    const descripsintern=listitemsintern.map((item,index)=>{return(
        <div className="flex flex-row  "  key={index}>
            <Dot size={20} className="mr-1 min-w-[20px] min-h-[20px]"/>
            <ExpandableDescription className="text-left" title={item.title} sub=""/>
        </div>
    )})

    const descrips = listitems.map((item,index)=>{ return(
        <div className="flex flex-row  "  key={index}>
        <Dot size={20} className="mr-1 min-w-[20px] min-h-[20px]"/>
        <ExpandableDescription className="text-left" title={item.title} sub={item.sub}/>
    </div>
      )
    })



    const languages = ["Python", "C", "MIPS", "JavaScript", "Java", "System Verilog", "TypeScript", "SQL", "JSP", "CSS Frameworks & Preprocessors", "Hindi", "French"]
    const technologies_swe = ["Angular", "Node.js", "Tailwind", "FastAPI", "SQLAlchemy", "GCS", "Render", "Flask", "Kubernetes", "Docker","React","Nextjs"]
    const technologies_other = ["Piwik/Matomo", "GA4", "Tableau", "Power BI", "Dynatrace","Figma"]
    const skills = ["Web Analytics", "Scrum & APM Frameworks", "Full-stack dev", "Software dev", "Web API dev", "Information Design", "B2B eCommerce", "Product Information Management", "SAP Commerce Cloud","Prototyping"]

    const langitems = languages.map((lang, index) =>
        <span key={index} className="bg-[#9bf3f066] border-[#09a6a1] border border-solid px-1 text-[17px]  font-mono-jetbrains">{lang}</span>
    )
    const sweitems = technologies_swe.map((tech, index) =>
        <span key={index} className="bg-[#6cab4133] border-[#556f44] border border-solid px-1 text-[17px] font-mono-jetbrains text-[#556f44]">{tech}</span>
    )
    const otheritems = technologies_other.map((other, index) =>
        <span key={index} className="bg-[#37d4c933] border-[#037971] border border-solid px-1 text-[17px] font-mono-jetbrains text-[#037971]">{other}</span>
    )
    const skillitems = skills.map((other, index) =>
        <span key={index} className="bg-[#ae4ca533] border-[#74226c] border border-solid px-1 text-[17px]  font-mono-jetbrains text-[#74226c]">{other}</span>
    )
    const coursecards = courses.map((course) => (<CourseCard title={course.title} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks} key={course.id} id={course.id} />))

    return (
        <>
            <Head>
                <title>Avi Kumar | About</title>
                <link rel="canonical" href="https://jahnavikumar.org/about" />
                <meta name="description" content="Hi! My name is Avi. I'm a third-year CS and French double major at UNC-Chapel Hill.
                                         My favorite things to do are to learn and to create. If you asked anyone who knew me 
                                         to describe me in one word, they'd probably say curious. Outside of computer science and 
                                         computer engineering, my top academic interests are in linguistics and environmentalism. I 
                                         am fluent in Hindi and French, and a learning beginner in Spanish. In my free time, I enjoy 
                                         writing , crocheting (or another creative outlet--like this website), thrift shopping, spending
                                         time with friends, and thinking about the things I'm learning. Read about my experience and skillsets below. Thanks for visiting!"/>
                <meta name="keywords" content="swe, software engineering, resume, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta charSet="utf-8" />

                {/* Open Graph */}
                <meta property="og:site_name" content="Avi Kumar" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:title" content="Avi Kumar | About" />
                <meta property="og:description" content="Hi! My name is Avi. I'm a third-year CS and French double major at UNC-Chapel Hill.
                                         My favorite things to do are to learn and to create. If you asked anyone who knew me 
                                         to describe me in one word, they'd probably say curious. Outside of computer science and 
                                         computer engineering, my top academic interests are in linguistics and environmentalism. I 
                                         am fluent in Hindi and French, and a learning beginner in Spanish. In my free time, I enjoy 
                                         writing , crocheting (or another creative outlet--like this website), thrift shopping, spending
                                         time with friends, and thinking about the things I'm learning. Read about my experience and skillsets below. Thanks for visiting!"/>

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://jahnavikumar.org" />
                <meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
                <meta property="og:image:alt" content="Avi Kumar | About Me" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

            </Head>
{/*screen size was 992 */}
            <div className="flex-grow min-h-[calc(100vh)] mx-auto max-w-[1024px] flex flex-col text-center gap-x-5 text-about-text pb-10   ">
                <Navbar currentpage="About" />
                <div className="mx-15 mb-9 items-center">{/*head*/}
                    <h1 className="text-4xl font-bold  mb-4 ml-auto text-puce">Experience & Education</h1>{/*title; originally h2*/}
                </div>
                <section className="text-left  pl-5 pr-5  mb-9 border-2 border-[#204d4a]">
                    <h2 className="text-2xl mb-[5px] font-bold mt-4 leading-[2rem]">Experience</h2>
                    <div className="px-6 py-2 flex flex-col gap-y-3">
                    <div className="flex flex-col mb-4 ">
                        <div className="flex flex-row justify-between bg-[#fccaca80] mb-2 mt-0.5 px-3 py-1 -ml-3 -mr-3 ">
                            <h2 className="text-about-secondary text-lg   font-bold underline ">{title} , <span className="italic font-normal"> Bausch + Lomb</span></h2>
                            <h2 className=" text-about-secondary min-w-[25%] font-bold text-right max-h-min leading-[28px]">{timerange}</h2>
                        </div>
                        <div className="mx-1">
                        <p className="leading-normal text-sm text-left font-mono-about mb-2">{description}</p>
                        <p className=" mb-2  text-left text-viridian  px-1 bg-viridian/30  ">Roles and Responsibilities:</p>
                        <div className="flex flex-col gap-y-2 mx-1">{descrips}</div>
                        </div>
                    </div>
                     
               
                    <ResumeWidget postcomma="UNC CS Department" precomma="Teaching Assistant (COMP 211: System Fundamentals)" timerange="January 2024-Present" description="Provide office hours for students; grade homework and exams; contribute to writing exam questions and homework auto- graders; lecture assistance" />
                    
                    <div className="flex flex-col mb-4 ">
                        <div className="flex flex-row justify-between bg-[#fccaca80] mb-2 mt-0.5 px-3 py-1 -ml-3 -mr-3 ">
                            <h2 className="text-about-secondary text-lg   font-bold underline ">{titleintern} , <span className="font-normal italic"> Bausch + Lomb</span></h2>
                            <h2 className=" text-about-secondary min-w-[25%] font-bold text-right max-h-min leading-[28px]">{timerangeintern}</h2>
                        </div>
                        <div className="mx-1">
                        <p className="leading-normal text-sm text-left font-mono-about mb-2">{descriptionintern}</p>
                        <p className=" mb-2  text-left text-viridian  px-1 bg-viridian/30  ">Projects</p>
                        <div className="flex flex-col gap-y-1 mx-1">{descripsintern}</div>
                        </div>
                    </div>
                    <ResumeWidget description="Hands-on experience in the Scrum framework and full-stack development of new features for the UNC
Computer Science official website. Angular, SQLAlchemy, FastAPI, Postgres SQL, Kubernetes, etc." precomma="Software Engineering Internship" postcomma="COMP 590 elective course" timerange="Spring 2024"/>
                    <ResumeWidget description="Managed sustainability initiatives for residents of Ram Village, an on-campus residential community." precomma="Sustainability Officer" postcomma="UNC Residence Hall Association Community Government" timerange="2023-2024"/>


                    </div>
                </section>

                <section className="text-left  pl-5 pr-5  mb-9 border-2 border-[#204d4a]">

                    <h2 className="text-2xl mb-[5px] font-bold mt-4 leading-[2rem]">Skills</h2>
                    <div className="flex flex-row gap-x-2.5 text-[#3482bd] mb-[15px]"> {/*skills */}
                        <span className="text-[#816e94] font-mono-text mr-2.5 font-bold text-xl ">Languages:</span> {/* subtitle*/}
                        <div className="font-mono-about custom-text-shadow flex flex-row flex-wrap justify-baseline gap-y-2.5 gap-x-[35px] text-[1rem] text-left mb-[15px]">
                            {langitems}</div>
                    </div>
                    <div className="flex flex-row gap-x-2.5 text-[#3482bd] mb-[15px]">
                        <span className="text-[#816e94] font-mono-text mr-2.5 font-bold text-xl ">Technologies(SWE):</span>
                        <div className="font-mono-about custom-text-shadow flex flex-row flex-wrap justify-baseline gap-y-2.5 gap-x-[35px] text-[1rem] text-left mb-[15px]">
                            {sweitems}</div>
                    </div>
                    <div className="flex flex-row gap-x-2.5 text-[#3482bd] mb-[15px]">
                        <span className="text-[#816e94] font-mono-text mr-2.5 font-bold text-xl ">Technologies (Other):</span>
                        <div className="font-mono-about custom-text-shadow flex flex-row flex-wrap justify-baseline gap-y-2.5 gap-x-[35px] text-[1rem] text-left mb-[15px]">
                            {otheritems}</div>
                    </div>
                    <div className="flex flex-row gap-x-2.5 text-[#3482bd] mb-[15px]">
                        <span className="text-[#816e94] font-mono-text mr-2.5 font-bold text-xl ">Skills:</span>
                        <div className="font-mono-about custom-text-shadow flex flex-row flex-wrap justify-baseline gap-y-2.5 gap-x-[35px] text-[1rem] text-left mb-[15px]">
                            {skillitems}</div>
                    </div>

                </section>
                <section className="text-left  pl-5 pr-5  mb-9 border-2 border-[#204d4a]">

<h2 className="text-2xl mb-[5px] font-bold mt-4 leading-[2rem]">Coursework</h2>
{/*<div className="py-2 justify-normal items-stretch min-h-max flex flex-row flex-wrap gap-y-5 gap-x-4 lg:max-xl:justify-center">*/}
<div className="py-2 grid grid-cols-4 gap-y-5 gap-x-4">
              {coursecards}
            </div>

</section>

            </div>
        </>
    )
}

type resumeprops = {
    precomma: string,
    postcomma:string,
    description: string,
    timerange: string
}

/*function ResumeWidget({ title, description, timerange }: resumeprops) {
    return (
        <div className="flex flex-row justify-between gap-0"> 
            <div className="flex flex-col mt-1 max-w-3/4">
                <h2 className="text-about-secondary bg-[#fccaca80] mt-[2px] font-bold font-mono-about! underline leading-[28px]">
                    {title}
                </h2>
                <span className=" leading-[1.5rem] text-[15px] text-left mb-[15px] mt-2.5 font-mono-about">{description}</span>  
            </div>
            <h2 className="ml-0 text-about-secondary  mt-1.5 mr-5 min-w-[25%] pr-5 font-bold text-right max-h-min bg-[#fccaca80] leading-[28px]">
                {timerange}
            </h2>
        </div>
    )
}*/

function ResumeWidget({precomma,postcomma, description,timerange}:resumeprops){
    return(
        <div className="flex flex-col mb-4 ">
        <div className="flex flex-row justify-between bg-[#fccaca80] mb-2 mt-0.5 px-3 py-1 -ml-3 -mr-3 ">
            <h2 className="text-about-secondary text-lg   font-bold underline ">{precomma} , <span className="italic font-normal">{postcomma}</span></h2>
            <h2 className=" text-about-secondary min-w-[25%] font-bold text-right max-h-min leading-[28px]">{timerange}</h2>
        </div>
        <div className="mx-1">
        <p className="leading-normal text-sm text-left font-mono-about ">{description}</p>
        </div>
    </div>
    )
}



export const getStaticProps: GetStaticProps = async () => {
    const courses = await getCourses();
    return {
      props: {
        courses
      },
      revalidate: 60,
    };
  }
  
  