import Head from "next/head";
import NavLink from "@/components/nav-link";
import ProjectCard from "@/components/project-card";
import {  projects } from "@/utils/data";
import CourseCard from "@/components/course-card";
import Navbar from "@/components/nav-bar";
import { GetStaticProps } from 'next';
import { getCourses, Course } from '../lib/notion';

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Avi Kumar",
  url: "https://jahnavikumar.org",
  sameAs: [
    "https://www.linkedin.com/in/jahnavikumar/",
    "https://github.com/aviomg"
  ],
  jobTitle: "Software Engineer, Web Analyst, Computer Science Student, & Developer",
  description: "Personal portfolio and projects website.",
  image: "https://jahnavikumar.org/og-image.png"
};

type Props = {
    courses: Course[];
};

 //pass the course card props thing into home
 //inside the export default function, crease the const coursecards using the props thing
 //done!

  //const coursecards1 = courses.map(course => <CourseCard course={course.name} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks}/>)
  
export default function Home({courses}:Props) {
  const projectcards = projects.map(project => <ProjectCard name={project.name} description={project.description} link={project.link} tech={project.tech} key={project.id} />)

  const coursecards = courses.map((course)=> (<CourseCard title={course.title} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks} key={course.id} id={course.id}/>))
  return (
    <>
    <Head>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <title>Avi Kumar | Home</title>
      <link rel="canonical" href="https://jahnavikumar.org" />

      <meta name="description" content="A personal website showcasing my experience and projects, and documenting my journey as a developer/engineer, computer science student, and human being." />
      <meta name="keywords" content="swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Avi Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Avi Kumar | Portfolio & Projects" />
        <meta property="og:description" content="A personal website showcasing my experience and projects, and documenting my journey as a developer/engineer, computer science student, and human being." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jahnavikumar.org" />
        <meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
        <meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />


    </Head>
    <div >
    {/*title page*/}
    
{/*main page*/}
    <div className="flex-grow">
     <Navbar currentpage={"Home"}/>

      <section className="pb-20">
        <div className="container sm:mx-auto p-2 sm:p-0  sm:text-center sm:container text-center sm:!max-w-[1366px]">

            <h2  className="text-4xl  font-serif font-extrabold mb-1">avi kumar</h2>
            <p className="mb-4 font-mono-normal"> CS Student @ UNC Chapel Hill | eCommerce Software Engineer and Lead Web Analyst @ Bausch+Lomb</p>
            <p className="text-lg text-gray-700 px-10">fourth-year student at UNC studying computer science and french. This site is a collection of my projects, notes, thoughts,
         professional information, and more. It&apos;s a space to document my journey as a computer science student, future developer/engineer, and human being. thanks for visiting!
                </p>
          </div>
          <div className="text-center container mx-auto mt-6 text-sm text-viridian">
            <ul className="flex flex-wrap justify-center gap-1 gap-y-4 sm:gap-3 px-1 sm:p-0  ">
              <NavLink name="Linkedin" href="https://www.linkedin.com/in/jahnavikumar/" />
              <NavLink name="Github" href="https://www.github.com/aviomg" />
              <NavLink name="avikumar2048@gmail.com" href="mailto:avikumar2048@gmail.com" />
              <NavLink name="Resume" href="" />
            </ul>
          </div>
        </section>
        <section className="px-6 pb-16">
        <h2 className="font-extrabold mb-5 text-2xl text-midblue font-serif">Projects</h2>
<section className="py-2 justify-normal items-stretch min-h-max flex flex-row flex-wrap gap-y-5 gap-x-4 max-sm:flex-col max-sm:gap-y-4 ">
  {projectcards}
</section>
        </section>
        <section className="px-6 pt-2 pb-8">
          <h2 className="font-extrabold text-2xl text-[#2d5baf] mb-3">Coursework</h2>
          <div className="py-2 justify-normal items-stretch min-h-max flex flex-row flex-wrap gap-y-5 gap-x-4 lg:max-xl:justify-center">
{coursecards}
          </div>
        </section>

      </div>
      


    </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async()=>{
  const courses = await getCourses();

  return{
      props:{
          courses,
      },
      revalidate:60,
  };
}
