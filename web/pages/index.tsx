import Image from "next/image";
import Link from "next/link";
import NavLink from "@/components/nav-link";
import ProjectCard from "@/components/project-card";
import { courses, projects } from "@/utils/data";
import CourseCard from "@/components/course-card";
import Navbar from "@/components/nav-bar";
import { GetStaticProps } from 'next';
import { getCourses, Course } from '../lib/notion';

type Props = {
    courses: Course[];
};

 //pass the course card props thing into home
 //inside the export default function, crease the const coursecards using the props thing
 //done!

  const projectcards = projects.map(project => <ProjectCard name={project.name} description={project.description} link={project.link} tech={project.tech} />)
  const coursecards1 = courses.map(course => <CourseCard course={course.name} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks}/>)
  
export default function Home({courses}:Props) {

  const coursecards = courses.map((course)=> (<CourseCard course={course.title} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks}/>))
  return (
    <div >
    {/*title page*/}
    
{/*main page*/}
    <div className="flex-grow">
     <Navbar currentpage={"Home"}/>

      <section className="pb-20">
        <div className="container sm:mx-auto p-2 sm:p-0  sm:text-center sm:container text-center sm:!max-w-[1366px]">

            <h2  className="text-4xl  font-serif font-extrabold mb-4">avi kumar</h2>
            <p className="text-lg text-gray-700 px-10">third-year student at UNC Chapel Hill studying computer science and french. This site is a collection of my projects, notes, thoughts,
         professional information, and more. It's a space to document my journey as a computer science student, future developer/engineer, and human being. thanks for visiting!
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
