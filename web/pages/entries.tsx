import Navbar from "@/components/nav-bar";
import { orderedPoems } from "@/utils/data";
import matter from "gray-matter";
import { JSX, useEffect, useState } from "react";
import { Poem } from "./blog";
import { Card } from "@/components/ui/card";
import fs from 'fs';
import path from 'path';
import Head from "next/head";

export default function Entries({ poems }: { poems: Poem[] }) {

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash.substring(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100); // adjust delay if needed
    }
  }, []);

  //const [currentries,setCurrEntries] = useState<JSX.Element[]>();
  //const [archientries,setArchEntries] = useState<JSX.Element[]>();
  //const [toc, setToc] = useState<JSX.Element[]>();
  const toc: JSX.Element[] = []
  const archientries: JSX.Element[] = []
  const currententries: JSX.Element[] = []
  const temptoc: JSX.Element[] = [];

  poems.forEach((poem, index) => {
    const currhref = `entries#poem${index + 1}`;
    const currtoc = <li>
      <a href={currhref} className="text-hgreen hover:text-red-400 hover:underline ease-in-out  cursor-pointer" id="poem1-toc">
        <span className="font-bold">{index + 1}. </span>
        {poem.date != "undefined" ? <span>{poem.date}// {poem.title}</span> : <span>{poem.title}</span>}
      </a>
    </li>
    toc.push(currtoc);
    const poemparas = poem.content.split("\n\n")
    const poemcont = poemparas.map(poem => {
      const paralines = poem.split("\n")
      const listitems = paralines.map(line => <p>{line}</p>)
      return (
        //need a div class=poem-para for each
        <div className="mb-4 mt-0">
          {listitems}
        </div>)
    })
    const itemid = `poem${index + 1}`;
    const classtitle = index % 2 == 0 ? "bg-puce/50 rounded mb-10 border-puce border" : "bg-pink-200/30 rounded mb-10 border border-pink-200"
    const item =
      <div className={classtitle}>
        <article id={itemid} className="text-gray-700 container block text-left mx-auto space-y-1 mb-2 px-40 py-4 max-sm:px-8">
          <h1 className="font-bold text-left" id="heading" >
            {poem.date != "undefined" ? <p>{poem.date}</p> : null}
            {poem.title != "undefined" ? <p>{poem.title}</p> : null}
          </h1>
          <div id="body1">
            {poem.subtitle!="undefined"? <div className="mb-4 mt-0"><p>{poem.subtitle}</p></div>:null }
            {poem.content!="undefined"? <div className="mb-4 mt-0">{poemcont} </div>:null }
          </div>
        </article>
      </div>
    if(poem.archive==="true"){
      archientries.push(item)
    }
    else{
      currententries.push(item)
    }
  })


  return (
    <>
    <Head>
<title>Avi Kumar | Poetry</title>
<link rel="canonical" href="https://jahnavikumar.org/entries" />
<meta name="description" content="writing and ranting and rhyming etc. This is my poetry portfolio, I hope you enjoy! view the table of contents to navigate to a poem."/>
<meta name="keywords" content="poetry, poem, poet, prose, writing, creative, blog, journal, diary, poems, swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charSet="utf-8" />

{/* Open Graph */}
<meta property="og:site_name" content="Avi Kumar" />
<meta property="og:locale" content="en_US" />
<meta property="og:title" content="Avi Kumar | Poetry" />
<meta property="og:description" content="writing and ranting and rhyming etc. This is my poetry portfolio, I hope you enjoy! view the table of contents to navigate to a poem."/>
<meta property="og:type" content="website" />
<meta property="og:url" content="https://jahnavikumar.org" />
<meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
<meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

</Head>

    <div className="flex-grow">
      <Navbar currentpage="Blog" />
      <div className="pb-10 pt-3">
        <div className="container mx-auto text-center">
          <h2 id="current" className="text-4xl font-serif font-bold mb-4 text-puce">blog posts</h2>
          <p className=" text-gray-700 italic">writing and ranting and rhyming and etc..</p>
        </div>
        <div className="pt-4">
          <h2 className="font-bold text-lg mx-auto text-center text-gray-800">Table of Contents</h2>
          <div className="max-w-4xl mx-auto max-h-[30vh] overflow-y-scroll border border-hgreen text-left pl-4 pr-20 py-2">

            <ul id="toc">
              {toc}
            </ul>
          </div>
        </div>
      </div>

      <div>

        <ul className="justify-center flex space-x-4">
          <li className="text-puce font-bold">current</li>
          <li className="text-viridian hover:underline"><a href="./entries#jumptoarchive">archived</a></li>
        </ul>
        <div id="entries" className="max-w-4xl mx-auto pb-10 py-4 px-6">
          {currententries}
        </div>
      </div>
      <h2 id="jumptoarchive" className="container pb-4 mx-auto text-center text-3xl font-bold text-puce">archived/older</h2>
      <ul className="justify-center flex space-x-4">
        <li className="text-viridian hover:underline"><a href="#current">current</a></li>
        <li id="archive" className="text-puce font-bold">archived</li>
      </ul>

      <div id="archived-entries" className="max-w-4xl mx-auto pb-10 py- px-6">
        {archientries}

      </div>
    </div>
    </>
  )
}

export async function getStaticProps() {
  const poemsDir = path.join(process.cwd(), 'public/poem-files');
  const poems = orderedPoems.map((filename) => {
    const filePath = path.join(poemsDir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      title: data.title || "undefined",
      subtitle: data.subtitle || "undefined",
      date: data.date || "undefined",
      archive: data.archive ? "true" : "false",
      content,
    };
  });

  return {
    props: {
      poems,
    },
  };
}

  /*useEffect(() => {
    Promise.all(
      orderedPoems.map(async (file) => {
        const res = await fetch(`/poem-files/${file}`);
        const text = await res.text();
        const { data, content } = matter(text);

        return {
          title: data.title || "undefined",
          subtitle: data.subtitle || "undefined",
          date: data.date || "undefined",
          archive: data.archive ? "true" : "false",
          content
        }
      })
    ).then((results) => {
      setPoems(results);
      let tempcurr: JSX.Element[] = []; //what we will set entries to
      let temparch: JSX.Element[] = [];
      let temptoc: JSX.Element[] = [];
      let tempcurr2: JSX.Element[] = [];
      results.forEach((poem, index) => {
        const currhref = `/entries#poem${index + 1}`
        const currtoc = <li>
          <a href={currhref} className="text-hgreen hover:text-red-400 hover:underline ease-in-out  cursor-pointer" id="poem1-toc">
            <span className="font-bold">{index + 1}. </span>
            {poem.date != "undefined" ? <span>{poem.date}// {poem.title}</span> : <span>{poem.title}</span>}
          </a>
        </li>
        temptoc.push(currtoc);

        const poemparas = poem.content.split("\n\n")
        // console.log(poemparas);
        const poemcont = poemparas.map(poem => {
          const paralines = poem.split("\n")
          const listitems = paralines.map(line => <p>{line}</p>)
          return (
            //need a div class=poem-para for each
            <div className="mb-4 mt-0">
              {listitems}
            </div>)

        })
        const itemid = `poem${index + 1}`;
        const classtitle = index % 2 == 0 ? "bg-puce/50 rounded mb-10 border-puce border" : "bg-pink-200/30 rounded mb-10 border border-pink-200"
        // console.log(classtitle)
        const item =
          <div className={classtitle}>
            <article id={itemid} className="text-gray-700 container block text-left mx-auto space-y-1 mb-2 px-40 py-4 max-sm:px-8">
              <h1 className="font-bold text-left" id="heading" >
                {poem.date != "undefined" ? <p>{poem.date}</p> : null}
                {poem.title != "undefined" ? <p>{poem.title}</p> : null}
              </h1>
              <div id="body1">
                {poem.subtitle != "undefined" ? <div className="mb-4 mt-0">
                  <p>
                    {poem.subtitle}
                  </p>
                </div> : null}
                {poem.content != "undefined" ? <div className="mb-4 mt-0">
                  <p>
                    {poemcont}
                  </p>
                </div> : null}
              </div>
            </article>

          </div>
        const classlist2 = index % 2 == 0 ? "bg-puce/50 rounded gap-4 shadow-(--shadow) border-viridian mb-10" : "bg-pink-200/30 rounded gap-4 shadow-(--shadow) border-viridian mb-10"
        const item2 =
          <Card className={classlist2}>
            <article id={itemid} className="text-gray-700 container block text-left mx-auto space-y-1 mb-2 px-40 py-4 max-sm:px-8">
              <h1 className="font-bold text-left" id="heading" >
                {poem.date != "undefined" ? <p>{poem.date}</p> : null}
                {poem.title != "undefined" ? <p>{poem.title}</p> : null}
              </h1>
              <div id="body1">
                {poem.subtitle != "undefined" ? <div className="mb-4 mt-0">
                  <p>
                    {poem.subtitle}
                  </p>
                </div> : null}
                {poem.content != "undefined" ? <div className="mb-4 mt-0">
                  <p>
                    {poemcont}
                  </p>
                </div> : null}
              </div>
            </article>
          </Card>

        if (poem.archive == "true") {
          temparch.push(item);
        }
        else { tempcurr.push(item); }
        //generate the list item by calling create mini
        //append it to the entries state variable


      })
      setArchEntries(temparch);
      setCurrEntries(tempcurr);
      console.log(archientries);
      console.log("done");
      console.log(currentries);

      setToc(temptoc);
    })
  }, [])*/
