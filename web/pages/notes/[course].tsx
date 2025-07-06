import Navbar from "@/components/nav-bar";
import { Course, getCourses } from "@/lib/notion";
import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";


type props={course:Course}

export default function CourseNotesPage({course}:props){

    let srcname = course.title.split(":")[0];
    const part1 = srcname.split(" ")[0];
    const part2 = srcname.split(" ")[1];
    srcname = "/assets/" + part1 + "-" + part2 + ".pdf";
    
    return(
        <div className="flex-grow ">
        <Navbar currentpage="Notes" />
        <section className="pb-2 ">
        <div className="container mx-auto text-center">
            <h2 className="text-2xl text-puce font-serif font-bold ">{course.title}</h2>
            </div>
            </section>
            <div className="flex-grow flex justify-center items-center mb-4">
        <div className="pdf-container border-2 border-amber-700 mx-auto my-auto mb-4 w-1/2 bg-gray-100 shadow-lg rounded-lg overflow-hidden">
        <iframe src={srcname} height={645}
                className="w-full border-none">
        </iframe>
      </div>
    </div>
           


    </div>

    )

}


export const getStaticPaths: GetStaticPaths = async() =>{
    const courses = await getCourses();

    const paths = courses.map((course)=>({
        params: { course: course.title
                                .split(":")[0]
                                .replace(/\s+/g,"")
                                .toLowerCase() }
        
    }));

    return{
        paths,
        fallback:"blocking"
    }

}

export const getStaticProps:GetStaticProps = async({params})=>{
    const courses = await getCourses();
    const slug = params?.course as string;
    const part1 = slug.slice(0,-3).toUpperCase();
    const part2 = slug.slice(-3);
    const denormalized = part1 + " " + part2

    const matchedCourse = courses.find((c)=>c.title.includes(denormalized));

    if (!matchedCourse) {
        return { notFound: true };
      }
    
    return{
        props:{
            course:matchedCourse,
        },
        revalidate:60,
    };
}