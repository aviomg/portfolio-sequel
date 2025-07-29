import Navbar from "@/components/nav-bar";
import Link from "next/link";
import { useEffect, useState } from 'react';
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
import CodeBlock from "@/components/code-block";
import fs from 'fs';
import path from 'path';
import { ChevronDown } from "lucide-react";
import { ChevronRight } from "lucide-react";
import Head from "next/head";


export default function CodePage({ fileContents }: { fileContents: Record<string, string> }) {
    useEffect(() => {
        Prism.highlightAll();
    }, []);
    const fileNames = Object.keys(fileContents);
    const [activeTab, setActiveTab] = useState<string>(fileNames[0]);
    const [activecode, setActiveCode] = useState<string>(fileContents[fileNames[0]]);
    const [dropdownopen, setDropdownopen] = useState<boolean>(true);
    const normalclasses = "bg-neutral-300 text-sm border-r border-neutral-200 text-gray-500 py-2 px-[14px] cursor-pointer hover:bg-neutral-400 transition-all duration-150"
    const activeclasses = "text-sm border-r border-neutral-200 py-2 px-[14px] cursor-pointer hover:bg-neutral-400 transition-all duration-150 bg-neutral-200 text-green-400 border-t-green-400 border-t "
    const normalclasses_sidebar = "py-2 px-[10px] text-sm cursor-pointer  hover:bg-[#dcdbdb] transition-all duration-150"
    const activeclasses_sidebar = "py-2 px-[10px] text-sm cursor-pointer  bg-[#b4c9e3] transition-all duration-150"
    const switchTab = (file: string): void => {
        setActiveTab(file);
    }

    useEffect(() => {
        setActiveCode(fileContents[activeTab]);
    }, [activeTab]);

    return (
        <>
        <Head>
        <title>Avi Kumar | Code </title>
        <meta name="description" content="python implementations of classic and modern algorithms from CS theory" />
        <meta name="keywords" content="code, python, algorithms, computer science theory"/>
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="utf-8" />
  
          {/* Open Graph */}
          <meta property="og:site_name" content="Avi Kumar" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:title" content="Avi Kumar | Code" />
          <meta property="og:description" content="Python implementations of classic and modern algorithms from CS theory" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://jahnavikumar.org" />
          <meta property="og:image" content="https://jahnavikumar.org/public/og-image.png" />
          <meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />
  
  
      </Head>
  
        <div className="flex-grow line-numbers match-braces">
            <Navbar currentpage="Notes" />
            <div className="container mx-auto text-center">
                <h2 className="text-2xl text-puce font-serif font-bold mb-4">alg implementations</h2>
                <p className="text-lg text-gray-700 font-normal">
                    <span>in COMP 550: Algorithms and Analysis, we studied various types of algorithms. below
                        is a compilation of my implementations of each algorithm discussed in</span>
                    <span>
                        <Link href="https://kevinsun.org/files/algorithms/algorithms.pdf" target="_blank"
                            className="underline hover:text-midblue italic"> Notes on Algorithms</Link></span>
                    <span> by Professor Kevin Sun. The files are organized in reference to each chapter of the textbook.</span>
                </p>
            </div>
            <div className="codebody font-sans m-0 p-0 flex justify-center items-center h-[100vh] mt-8">
                <div className="ide-container flex w-[85%] h-full border border-[#444] rounded-lg overflow-hidden bg-[#252526] shadow-md">
                    <div className="sidebar w-[20%] bg-neutral-300 text-gray-500 py-[10px] rounded-sm border-r border-r-gray-500">
                        <ul className="list-none p-0 m-0">
                            <li id="explorer" className="py-2 pr-[10px] pl-[6px] cursor-pointer flex flex-row gap-x-1 text-sm  hover:bg-[#dcdbdb]" onClick={() => setDropdownopen(!dropdownopen)}>
                                <span>{dropdownopen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}</span>
                                <span>files</span>
                            </li>
                            {dropdownopen ?
                                Object.keys(fileContents).map((file) => (
                                    <li key={file} className={activeTab == file ? activeclasses_sidebar : normalclasses_sidebar} onClick={() => switchTab(file)}>
                                        {file}
                                    </li>
                                )) : null
                            }

                        </ul>
                    </div>
                    <div className="main-content flex-1 flex flex-col overflow-x-scroll">
                        <div className="tabs bg-neutral-300 flex overflow-x-scroll">
                            {Object.keys(fileContents).map((file) => (
                                <button key={file} className={activeTab == file ? activeclasses : normalclasses} onClick={() => switchTab(file)}>
                                    {file}
                                </button>
                            ))}
                        </div>
                        <div className="flex-1 p-2.5 overflow-y-scroll bg-neutral-200">
                        <CodeBlock code={activecode} language="python" />
                    </div>
                    </div>

                    
                </div>
            </div>
        </div>
        </>
    )
}

export async function getStaticProps() {
    const codedir = path.join(process.cwd(), 'public/assets/code');

    const files = [
        'ch1_array_algs.py',
        'ch2_essential_graph_algs.py',
        'ch3_greedy_algs.py',
        'ch4_dynamic_prog_algs.py',
        'ch5_shortest_path_algs.py',
        'ch7_np_hardness.py',
        'ch8_approximation_algs.py'
    ];
    const fileContents = Object.fromEntries(
        files.map((filename) => {
            const filePath = path.join(codedir, filename);
            const content = fs.readFileSync(filePath, 'utf-8');
            return [filename, content];
        })
    );

    return {
        props: {
            fileContents,
        },
    };
}