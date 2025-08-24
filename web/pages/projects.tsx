import Head from "next/head";
import ProjectCard from "@/components/project-card";
import {  projects } from "@/utils/data";
import Navbar from "@/components/nav-bar";

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


export default function Projects() {

  const projectcards = projects.map(project => <ProjectCard mini={false} highlight={true} minidescrip={project.mini_description? project.mini_description:null} target_blank={project.target_blank} name={project.name} description={project.description} link={project.link} tech={project.tech} key={project.id} />)

  return (
    <>
    <Head>
    <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      <title>Avi Kumar | Projects</title>
      <link rel="canonical" href="https://jahnavikumar.org/projects" />
    <meta name="description" content="my personal projects"/>
      <meta name="keywords" content="swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />

        {/* Open Graph */}
        <meta property="og:site_name" content="Avi Kumar" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="Avi Kumar | Projects" />
        <meta property="og:description" content="My personal projects." />
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
     <Navbar currentpage={"None"}/>

      <section className="pb-10">
        <div className="container sm:mx-auto p-2 sm:p-0  sm:text-center sm:container text-center sm:!max-w-[1050px]">

            <h2  className="text-4xl  font-serif font-extrabold mb-4">projects</h2>
            <p className="text-lg text-gray-700">My personal and professional projects. Click on the cards to find the github repos and/or learn more.</p>
            {
             /* variant==="2"?
              null: <p className="mb-4 font-mono-normal"> CS Student @ UNC Chapel Hill | eCommerce Software Engineer and Lead Web Analyst @ Bausch+Lomb</p>
                */
            }
      

           {/* <p className="text-lg text-gray-700 px-10">A collection of my projects, notes, thoughts,
         professional information, and more. It&apos;s a space to document my journey as a computer science student, future developer/engineer, and human being. thanks for visiting!
                </p>*/}
          </div>
        
        </section>
        </div>

       
        <section className="pb-16 max-w-[990px] px-4 mx-auto">
          <div className="grid grid-cols-2 gap-6">
            {projectcards}
          </div>
       {/* <div className="flex flex-col gap-y-5">
        <section className="grid grid-cols-3 gap-4  ">
          {projectcards.slice(0,3)}
        </section>
        <section className="grid grid-cols-2 gap-4  ">
          {projectcards.slice(3,5)}
        </section>
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4  ">{projectcards.slice(5,projectcards.length)}</section>

        </div>*/}
        </section>
       {/* <section className="pb-16 max-w-[990px] px-4 mx-auto">
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4 ">
          {projectcards}
        </section>
        </section>*/}
{/*<section className="py-2 justify-normal items-stretch min-h-max flex flex-row flex-wrap gap-y-5 gap-x-4 max-sm:flex-col max-sm:gap-y-4 ">
  {projectcards}
</section>

dynamic grid side:
        <section className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4  ">


*/}
        

      


    </div>
    </>
  );
}


