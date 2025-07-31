import Navbar from "@/components/nav-bar";
import { Course, getCourses } from "@/lib/notion";
import { GetServerSidePropsContext, GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";



type props={course:Course}

export default function CourseNotesPage({course}:props){

    let ctitle = course.title.split(":")[0];
    const part1 = ctitle.split(" ")[0];
    const part2 = ctitle.split(" ")[1];
    const srcname = "/assets/" + part1 + "-" + part2 + ".pdf";
    const slugforcanonurl = (part1+part2).toLowerCase();
    const canonicalurl = `https://jahnavikumar.org/notes/${slugforcanonurl}`
    
    return(
        <>
        <Head>
        <title>Avi Kumar | Notes: {ctitle}</title>
    <link rel="canonical" href={canonicalurl} />
      <meta name="description" content={course.title}/>
      <meta name="keywords" content="swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Avi Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content={`Avi Kumar | ${ctitle}`} />
        <meta property="og:description" content={course.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://jahnavikumar.org" />
        <meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
        <meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        </Head>
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
    </>
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