import Head from "next/head";
import NavLink from "@/components/nav-link";
import ProjectCard from "@/components/project-card";
import { orderedPoems, projects } from "@/utils/data";
import Navbar from "@/components/nav-bar";
import { GetStaticProps } from 'next';
import Link from "next/link";
import path from 'path';
import fs from 'fs';
import Image from "next/image";
import ViewMoreCard from "@/components/viewMoreCard";
import { Dot } from "lucide-react";
import matter from "gray-matter";
import { JSX, useState } from "react";
import { createMini, Poem } from "./blog";
//import  { useRouter } from "next/router";
//import { useEffect, useState } from "react";

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
  poems: Poem[];
};

//pass the course card props thing into home
//inside the export default function, crease the const coursecards using the props thing
//done!

//const coursecards1 = courses.map(course => <CourseCard course={course.name} description={course.description} notesnames={course.notesnames} noteslinks={course.noteslinks}/>)

export default function Home({  poems }: Props) {
  const numPoems = 4;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [poems1, setPoems1] = useState<Poem[]>(poems);
  const ent = poems1.slice(0, numPoems).map((poem, index) => createMini(poem, index + 1))
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [entries, setEntries] = useState<JSX.Element[]>(ent);

  //const router=useRouter();
  // const [variant, setVariant] = useState<string | undefined>(undefined);

  /*useEffect(() => {
    if (router.isReady) {
      const queryVariant = router.query.variant;
      setVariant(Array.isArray(queryVariant) ? queryVariant[0] : queryVariant);
    }
  }, [router.isReady, router.query.variant]);*/

  const projectcards = projects.map(project => project.featured ? <ProjectCard mini={false} highlight={false} name={project.name} description={project.description} link={project.link} tech={project.tech} key={project.id} /> : null)
  projectcards.push(
    <ViewMoreCard
      key="view-more"
      href="/projects"
      showPlus={false}            // or false to show "View all"
    // label="View all"
    // countText={`See ${projects.length} projects`} // optional
    />
  );




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
        <meta name="keywords" content="swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev" />
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
        <div className="flex-grow max-w-[750px] mx-auto">
          <Navbar currentpage={"Home"} />

          <section className="pb-8">
            <div className="container sm:mx-auto p-2 sm:p-0  sm:text-center sm:container text-center sm:!max-w-[1050px]">

              <h2 className="text-4xl  font-serif font-extrabold mb-1">avi kumar</h2>
              {
                /* variant==="2"?
                 null: <p className="mb-4 font-mono-normal"> CS Student @ UNC Chapel Hill | eCommerce Software Engineer and Lead Web Analyst @ Bausch+Lomb</p>
                   */
              }
              <div className="max-w-none ">

                <p className="mb-4 font-mono-about text-midblue max-w-none "> CS Student @ UNC Chapel Hill | eCommerce Software Engineer and Lead Web Analytics Developer @ Bausch+Lomb</p>
              </div>

              {/* <p className="text-lg text-gray-700 px-10">A collection of my projects, notes, thoughts,
         professional information, and more. It&apos;s a space to document my journey as a computer science student, future developer/engineer, and human being. thanks for visiting!
                </p>*/}
            </div>
            <div className="text-center container mx-auto mt-6 text-sm text-viridian">
              <ul className="flex flex-wrap justify-center gap-1 gap-y-4 sm:gap-3 px-1 sm:p-0  ">
                <NavLink name="Linkedin" href="https://www.linkedin.com/in/jahnavikumar/" />
                <NavLink name="Github" href="https://www.github.com/aviomg" />
                <NavLink name="avikumar2048@gmail.com" href="mailto:avikumar2048@gmail.com" />
                <NavLink name="Resume" href="" />
              </ul>
            </div>
            <section className="container sm:mx-auto p-2 sm:p-0 mt-5 mb-3 sm:text-center sm:container text-center ">


              <div className=" text-right font-serif text-lg"> {/*leading-[28px]..he had line height 24px. font size 16. */}
                <span className=" text-gray-700 ">
                  Hi! My name is Avi. I&apos;m a fourth-year CS and French double major at UNC-Chapel Hill. I&apos;m currently a software engineer on
                  the Global eCommerce team at Bausch+Lomb, where I build and maintain our web analytics system, create internal tools,
                  and more. Right now, I&apos;m leading the design and front-end development of a global customer dashboard.
                  {/* <span className="text-midblue underline ml-2 hover:text-puce duration-75"><Link href="/about">
                         [More about my relevant experience &rarr;]
                        </Link>
                        </span>*/}

                </span>
                <p className="mt-1 text-gray-700">
                  My favorite things
                  to do are to learn and to create. If you asked anyone who knew me (or has ever met me) to describe me in one word,
                  they&apos;d probably say &quot;curious&quot;. In my free time, I enjoy

                  <span className="text-midblue underline ml-2 hover:text-puce duration-75">
                    <Link href="/entries">writing</Link>
                  </span>
                  <span className="  text-about-text">, </span>
                  <span className=" text-midblue underline hover:text-puce duration-75">
                    <Link href="/crochet">crocheting</Link>
                  </span>
                  <span className="text-about-text">, spending time with friends, and thinking about the things I&apos;m learning. Thanks for visiting!</span>
                </p>
              </div>
            </section>

            <ul className=" text-right mx-4 mt-4 font-mono-about font-bold text-gray-700 gap-y-1 flex flex-col">
              <li className="flex flex-row gap-x-2 justify-center"><Dot /><Link href="/about" className="text-midblue underline hover:text-puce duration-75">[Experience/CV]</Link></li>
              <li className="flex flex-row gap-x-2 justify-center "><Dot /><Link href="/entries" className="text-midblue underline hover:text-puce duration-75">poetry/prose/processes </Link></li>
              <li className="flex flex-row gap-x-2 justify-center"><Dot /><Link href="/crochet" className="text-midblue underline hover:text-puce duration-75">crochet</Link></li>
            </ul>

          </section>


          {/* <section className="pb-16 max-w-[750px] px-4 mx-auto">
        <h2 className="font-extrabold mb-5 text-2xl text-midblue font-serif">Projects</h2>
        <div className="flex flex-col gap-y-5">
        <section className="grid grid-cols-3 gap-4  ">
          {projectcards.slice(0,3)}
        </section>
        <section className="grid grid-cols-2 gap-4  ">
          {projectcards.slice(3,5)}
        </section>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4  ">{projectcards.slice(5,projectcards.length)}</section>

        </div>
        </section>*/}
          <section className=" mb-8">
            <h2 className="font-extrabold mb-2 text-2xl text-midblue font-serif">Projects</h2>
            <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 ">
              {projectcards}
            </section>
          </section>
          {/*<section className="py-2 justify-normal items-stretch min-h-max flex flex-row flex-wrap gap-y-5 gap-x-4 max-sm:flex-col max-sm:gap-y-4 ">
  {projectcards}
</section>

dynamic grid side:
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4  ">


*/}

          <section className="mb-20">
            <div className="flex flex-col gap-y-4">
              <div className="mb-4">
                <h2 className="font-extrabold text-2xl text-[#2d5baf] mb-2">For Fun</h2>
                <div className=" text-left font-serif text-lg"> {/*leading-[28px]..he had line height 24px. font size 16. */}
                  <p className=" text-gray-700 ">I have always loved to write, and one of the reasons that I initially created this site was to give my words and sentences a proper shelf to sit on. you can view more of my work <span className="text-midblue underline hover:text-midblue/70 transition-all"><Link href="/entries">here</Link></span>.
                  </p>
                </div>
                <div className="py-2 justify-normal items-stretch min-h-max   gap-y-5 gap-x-4 lg:max-xl:justify-center">
                  <div className=" border-viridian border-2 max-sm:mx-6">
                    <div id="thumbnail" className="max-w-5xl mx-auto pb-4 pt-4 px-6 text-center">
                      <Link href="/entries">

                      </Link>

                      <div id="poetry-preview" className="text-left text-gray-700">
                        <hr className="text-[#E5E7EB]" />
                        {entries}
                      </div>


                      <Link href="/entries">

                        <button className="text-midblue border border-viridian mt-4 px-4 text-lg font-bold text-left  hover:bg-midblue/20 hover:border-midblue hover:shadow-md transition all duration-75 rounded-sm max-w-fit"
                        >see all</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 text-lg flex flex-row gap-x-4">

                <div className=" inline-block sm:w-1/5 md:max-lg:w-[50%] lg:max-xl:w-[40%] min-w-[300px] mx-auto">
                  <div className="relative w-full md:max-w-[300px] lg:w-full h-[300px] overflow-clip  shadow-puce hover:shadow-pink-600 shadow-md border-2 border-puce">
                    <Image
                      src="/crochet/IMG_9727.webp"
                      alt="crochet image"
                      fill
                      className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col items-center">
                  <p className="">My second love is crochet! You can find my photo diary (currently a work in progress) of crochet endeavors <span className="text-midblue underline hover:text-midblue/70 transition-all"><Link href="/entries">here</Link></span>. </p>
                  <div className="relative w-1/2 h-full   shadow-puce  hover:shadow-pink-600  shadow-md border-2 border-puce">
                    <Image
                      src="/crochet/covers.jpeg"
                      alt="crochet image"
                      fill
                      className="object-cover " />
                  </div>
                </div>
              </div>
            </div>


          </section>
     

        </div>





      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const poemsDir = path.join(process.cwd(), 'public/poem-files');
  const poems = orderedPoems.map((filename) => {
    const filePath = path.join(poemsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      title: data.title || "undefined",
      subtitle: data.subtitle || "undefined",
      date: data.date || "undefined",
      archive: data.archive || "false",
      content,
    };
  });


  return {
    props: {
      poems
    },
    revalidate: 60,
  };
}

