import Navbar from "@/components/nav-bar";
import CourseCard from "@/components/course-card";
import { GetStaticProps } from 'next';
import { getCourses, Course } from '../lib/notion';
import Link from "next/link";
import { CornerDownRight } from "lucide-react";



type Props = {
    courses: Course[];
};

export default function NotesPage({courses}:Props){
    
    const withnotes:Course[] = courses.filter((course)=> course.noteslinks.length>0);
    const courseitems = withnotes.map((course,index)=>{
        let normalized = course.title.split(":")[0];//course.title.replace(/\s+/g, "");
        normalized = normalized.replace(/\s+/g,"").toLowerCase();
        const href = `/notes/${normalized}`
        const part1 = normalized.slice(0,-3).toUpperCase();
        const part2 = normalized.slice(-3);
        const denormalized = part1 + " " + part2
        return(
        <li>
        <Link href={href} className="block p-2 bg-white shadow-md rounded-lg hover:bg-puce/30  transition-all duration-75">
          <h2 className={index%2==0? "text-xl text-viridian":"text-xl text-hgreen"}
          >{course.title}</h2>
        
        </Link>
        {course.title.includes("550")? 
        <div className="flex flex-row gap-x-1 mt-2 ml-10 items-center">
            <CornerDownRight className="text-gray-700" size={20}/>
            <Link href="/code/comp550" className=" text-gray-700 hover:underline hover:text-midblue transition-all duration-75 cursor-pointer">algorithm implementation code</Link>
        </div>:null
        }
      </li>)
    }
    )

    return (<div className="flex-grow">
        <Navbar currentpage="Notes"/>
        <section className="pb-6">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl text-puce font-serif font-bold mb-4">archive: all course notes</h2>
            <p className="text-lg text-gray-700">cornell notes are superior and yes, i would die on that hill (though i'm not sure if that's saying a lot)</p>
            </div>
            </section>

            <div className="flex-grow max-w-4xl w-full mx-auto py-3">
                <ul className="space-y-4">
                    {courseitems}
                </ul>

            </div>
    </div>)
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