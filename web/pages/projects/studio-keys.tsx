import Navbar from "@/components/nav-bar";
import useSWR from 'swr';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';
import React from 'react';


const fetcher=(url:string)=>fetch(url).then((r)=>r.json());

export default function StudioKeysPage(){
    const repo = 'studio-keys'
    const {data,error,isLoading}=useSWR(
        repo?`/api/readme?repo=${encodeURIComponent(String(repo))}`:null,
        fetcher
    );

    if(error) return <p>Error loading README</p>;
    if(isLoading||!data) return <p>Loading...</p>;

    return(
        <div className="flex-grow max-w-[750px] mx-auto">
        <Navbar currentpage="None"/>
        <div className='mx-auto text-left my-0 font-mono-about underline hover:text-midblue transition-all'><Link href="/projects">back to projects</Link></div>
        <div className='prose prose-neutral prose-h1:-mt-4 prose text-gray-700  mx-auto p-6 max-w-none prose-a:text-midblue prose-a:hover:text-blue-300 prose-a:transition-all leading-normal prose-headings:text-puce prose-code:font-mono-jetbrains prose-h2:mb-3 prose-h2:font-mono-about prose-headings:font-mono-about prose-h1:text-center  '>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {data.markdown}
            </ReactMarkdown>
        </div>
        </div>   
       
    )

}