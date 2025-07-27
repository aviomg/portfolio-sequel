import Navbar from "@/components/nav-bar";
import Link from "next/link";


export default function CodePage(){
    return(
        <div className="flex-grow">
            <Navbar currentpage="Notes"/>
            <section className="pb-6">
        <div className="container mx-auto text-center">
            <h2 className="text-4xl text-puce font-serif font-bold mb-4">alg implementations</h2>
            <p className="text-lg text-gray-700 font-normal">
                <span>in COMP 550: Algorithms and Analysis, we studied various types of algorithms. below
                is a compilation of my implementations of each algorithm discussed in</span>
                <span>
                    <Link href="https://kevinsun.org/files/algorithms/algorithms.pdf" target="_blank" 
                    className="underline hover:text-midblue italic"> Notes on Algorithms</Link></span>
                <span> by Professor Kevin Sun. The files are organized in reference to each chapter of the textbook.</span>
            </p>
           
            </div>
            </section>
        </div>
    )
}