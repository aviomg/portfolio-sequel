import Head from "next/head";
import Navbar from "@/components/nav-bar";
import { GetStaticPaths, GetStaticProps } from "next";
import { getAllSlugs, getPoemBySlug } from "@/lib/poems";
import {Poem} from "../blog";
import Link from "next/link";

export default function PoemPage({poem}:{poem:Poem}) {

  const backhref=`../entries#${poem.slug}`

  const paras=poem.content.split("\n\n")
  const poemcont = paras.map((poem,ind1) => {
    const paralines = poem.split("\n")
    const listitems = paralines.map((line,ind2) => <p key={ind2}>{line}</p>)
    return (
      //need a div class=poem-para for each
      <div key={ind1} className="mb-4 mt-0">
        {listitems}
      </div>)
  })


const pageTitle =
poem.title !== "undefined" ? `${poem.title}` : "Poetry | Avi Kumar";

return(
  <>
  <Head>
    <title>{pageTitle}</title>
    <link rel="canonical" href={`https://jahnavikumar.org/entries/${poem.slug}`} />
        <meta
          name="description"
          content={
            poem.subtitle !== "undefined"
              ? poem.subtitle
              : "Poem from Avi Kumar’s poetry portfolio."
          }
        />

        <meta property="og:title" content={pageTitle} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://jahnavikumar.org/entries/${poem.slug}`} />
        <meta property="og:site_name" content="Avi Kumar" />
      </Head>
    
      <div className="flex-grow mx-auto" id="top">
      <Navbar currentpage="Poetry" />
     

      <div className="px-60 mx-auto mt-6">
        <div><Link href={backhref} className="text-sm text-midblue hover:text-puce hover:underline">back to all poems</Link></div>
      
    <article className="text-gray-700 container block text-left mx-auto space-y-1 mb-2  py-4 max-sm:px-8">
      <div className="mb-6">
      <h1 className="font-bold text-left text-lg" id="heading" >
        {poem.title != "undefined" ? <p>{poem.title}</p> : null}
        {poem.date != "undefined" ? <p>{poem.date}</p> : null}

      </h1>
      </div>
     
      <div id="body1" >
        {poem.subtitle!="undefined"? <div className="mb-4 mt-0"><p>{poem.subtitle}</p></div>:null }
        {poem.content!="undefined"? <div className="mb-4 mt-0">{poemcont} </div>:null }
      </div>
    </article>
    <a href="./entries#top">
    </a>

  

      </div>
      

    </div>

  </>
)
  
}

export const getStaticPaths:GetStaticPaths=async()=>{
  const slugs=getAllSlugs();
  return{
    paths: slugs.map((s) => ({ params: { slug: s } })),
    fallback:false  
  }
}

export const getStaticProps: GetStaticProps = async(context)=>{
  const slug=context.params?.slug as string;
  console.log("passing slug: " + slug)
  const poem=getPoemBySlug(slug);
  return{
    props:{poem},
  }
}