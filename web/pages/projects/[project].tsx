import { GetServerSideProps } from 'next';
import Navbar from "@/components/nav-bar";
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import React, { useEffect } from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-python';
import 'prismjs/themes/prism.css';
import 'prismjs/plugins/toolbar/prism-toolbar';
import 'prismjs/plugins/copy-to-clipboard/prism-copy-to-clipboard';
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import 'prismjs/plugins/match-braces/prism-match-braces';
import 'prismjs/plugins/match-braces/prism-match-braces.css';
import 'prismjs/plugins/file-highlight/prism-file-highlight';


type Props={name:string}
const fetcher=(url:string)=>fetch(url).then((r)=>r.json());

export default function ProjectPage({name}:Props) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);

    const repo = name
    const {data,error,isLoading}=useSWR(
        repo?`/api/readme?repo=${encodeURIComponent(String(repo))}`:null,
        fetcher
    );
    if(error) return <p>Error loading README</p>;
    if(isLoading||!data) return <p className="text-2xl  text-center mx-auto my-auto">Loading...</p>;

    return(
        <div className="flex-grow max-w-[750px] mx-auto">
        <Navbar currentpage="None"/>
        <div className='mx-auto text-left mt-0 mb-2 font-mono-about underline hover:text-midblue transition-all'><Link href="/projects">back to projects</Link></div>

        <div className='prose prose-neutral prose-h1:-mt-4  pre:code-block pre:bg-neutral-300 pre:language-python pre:line-numbers code:language-python  text-gray-700  mx-auto p-6 max-w-none prose-a:text-midblue prose-a:hover:text-blue-300 prose-a:transition-all leading-normal prose-headings:text-puce prose-code:font-mono-jetbrains prose-h2:mb-3 prose-h2:font-mono-about prose-headings:font-mono-about prose-h1:text-center  '>
            <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                code({node,className,children,...props}){
                   // const  codeContent=String(children).replace('"'','hh');
                   const codeContent=String(children);
              
              /*      if(inline){
                        return(
                            <code className={className}{...props}>{codeContent}</code>
                        );
                    }*/
                    return(
                        
                        <code className="font-mono-code bg-gray-200 rounded-md text-[#0d0d0d] text-sm font-medium pt-[0.15rem] pb-[0.15rem] pl-[0.3rem] pr-[0.3rem]"{...props}>{codeContent}</code>
                    );
                },
            }}
            >
                {data.markdown}
            </ReactMarkdown>
        </div>
        </div>   
    )
}
/*                            <code className='font-mono-code bg-gray-200 rounded-md text-[#0d0d0d] text-sm font-medium pt-[0.15rem] pb-[0.15rem] pl-[0.3rem] pr-[0.3rem]'*/
export const getServerSideProps: GetServerSideProps<Props> = async ({ params }) => {
    //const name=context.query.projects;
    const p = params?.project;
  const slug = Array.isArray(p) ? p[0] : p;

  if (!slug) {
    return { notFound: true };
  }

  // If your repo name == slug, pass it straight through.
  // If they differ, map slug -> repo here.
  return { props: { name: slug } };
}
