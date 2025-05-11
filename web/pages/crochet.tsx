import Navbar from "@/components/nav-bar";
import Image from 'next/image'


export default function CrochetPage(){

    return <div className="flex-grow">
          <Navbar currentpage="Crochet"/>
          <section className="pb-6">
            <div className="container mx-auto text-center">
            <h2 className="text-3xl text-viridian font-serif font-bold mb-4">crochet photo diary and gallery</h2>
            <p className="text-lg text-gray-700">more to come soon! this page is under construction.</p>
            </div>
          </section>
          <div className="flex justify-center items-center gap-4 mb-8">
          <img src="/crochet/IMG_9727.webp" alt="Image 1" className="w-1/6 shadow-lg rounded-sm border-2 border-viridian"/>
  <img src="/crochet/legwarmers.webp" alt="Image 3" className="max-h-[200px] object-contain rounded-sm border-viridian border-2"/>
  <img src="/crochet/IMG_1412.webp" alt="Image 2" className="w-1/6 rounded-sm shadow-md border-2 border-viridian"/>
  <img src="/crochet/face.webp" alt="Image 2" className="max-h-[230px] object-cover border-viridian border-2 rounded-sm"/>
</div>

    </div>
}
/*                 <Image src="/crochet/IMG_9727.webp" alt="Image 1" className="w-1/6 shadow-lg rounded-sm border-2 border-viridian"/>
  
   <Image src="/crochet/IMG_1412.webp" alt="Image 2" className="w-1/6 rounded-sm shadow-md border-2 border-viridian"/>
            <Image src="/crochet/face.webp" alt="Image 2" className="max-h-[230px] object-cover border-viridian border-2 rounded-sm"/>
 */