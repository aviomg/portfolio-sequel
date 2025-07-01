import Navbar from "@/components/nav-bar";
import Image from 'next/image'
import { Geist, Geist_Mono } from "next/font/google";
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { crochetposts } from "@/utils/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function CrochetPage(){

  const listitems = crochetposts.map(post=>{
    return <PostWidget title={post.title} subtitle={post.subtitle} captions={post.captions} srcs={post.srcs} iscarousel={post.iscarousel} subcaps={post.subcaps} />
  })

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
    <h2 className="pt-4 px-10 text-center text-lg text-gray-700 !font-mono-normal container mx-auto max-w-6xl">the following is an (unfinished) chronological documentation of my experiences/accomplishments/creations in crochet, 
  somewhat organized into chapters and by personal milestones. thank you for viewing and i hope you enjoy!
        </h2>
    <div className="max-w-4xl mx-auto pb-10 py-4 px-6 flex flex-col gap-7 ">
     {/* <PostWidget title="birthday gift for my roommate" 
            subtitle="lots of fun, enjoyed the challenge of having to emulate the very specific shape of a cat. could not add facial features because i knew that i would butcher it"
            captions={[]}
            iscarousel={false}
            srcs={["/crochet/cat.jpeg"]} /> 
   <PostWidget title="my most recent tapestry: moonlight (working title)" iscarousel={false} subtitle="finished on february 4, 2025." captions={[]} srcs={["/crochet/moonlight.jpeg"]} />
    <PostWidget title="ch 1: beginner (June-August 2023)" subtitle=" finding my footing and soaking my socks, a whole lot of granny squares, and more." iscarousel={true} captions={["some random squares","some random squares", "first time trying my hand at tapestry crochet","a hat for my naani, modeled on my sister and I.","a hat for my naani, modeled on my sister and I."]} srcs={["/crochet/3a.webp","/crochet/3b.webp","crochet/1a.webp","/crochet/2a.webp","/crochet/2b.webp","/crochet/4a.webp","/crochet/4b.webp","/crochet/5a.webp","/crochet/6a.webp","/crochet/6b.webp","/crochet/7a.webp","/crochet/7b.webp","/crochet/7c.webp","/crochet/8b.webp","/crochet/8c.webp"]} /> */}
    {listitems}
    </div>


    </div>
}
/*                 <Image src="/crochet/IMG_9727.webp" alt="Image 1" className="w-1/6 shadow-lg rounded-sm border-2 border-viridian"/>
  
   <Image src="/crochet/IMG_1412.webp" alt="Image 2" className="w-1/6 rounded-sm shadow-md border-2 border-viridian"/>
            <Image src="/crochet/face.webp" alt="Image 2" className="max-h-[230px] object-cover border-viridian border-2 rounded-sm"/>
 */

type postwidgetprops = {title:string,iscarousel:boolean,captions: string[],srcs:string[], subtitle:string, subcaps:string[]}
function PostWidget({title, iscarousel, captions, srcs, subtitle, subcaps}:postwidgetprops){

  if (!iscarousel){
    return(
      <div>
        <Card className="bg-puce/40 gap-4 shadow-(--shadow) border-viridian">
        <div className="text-gray-700 container block text-left mx-auto space-y-1  px-10 ">
          <CardTitle className="text-lg font-bold text-gray-700 py-3">{title}</CardTitle>
          <CardDescription className="text-base text-gray-700">{subtitle} </CardDescription>
        </div>
        <CardContent className="text-gray-700">
          <article>
          <div className="flex flex-col justify-center items-center">
                      <div className=" flex-row flex max-h-[400px] gap-4 max-w-fit overflow-hidden ">
                      <img  className=" border-[2px] max-h-[400px]  max-w-[400px] min-h-[400px]  border-viridian shadow-lg shadow-black object-contain rounded-md" src={srcs[0]} alt="Gallery Image" />
                      </div>
                      </div>
          </article>
        </CardContent>
        </Card>
            </div>
    )

}
else{//logic for carousels here:
  const OPTIONS: EmblaOptionsType = { loop: true }
const SLIDE_COUNT = 5
const SLIDES = Array.from(Array(SLIDE_COUNT).keys())


  return (  
  <div>
  <Card className="bg-puce/40 gap-4 shadow-(--shadow) border-viridian">
  <div className="text-gray-700 container block text-left mx-auto space-y-1  px-10 ">
          <CardTitle className="text-lg font-bold text-gray-700 py-3">{title}</CardTitle>
          <CardDescription className="text-base text-gray-700">{subtitle} </CardDescription>
        </div>
        <CardContent className="text-gray-700">
                  <article  className="mt-4">
                  <EmblaCarousel slides={srcs} options={OPTIONS} captions={captions} subcaps={subcaps} />
                  </article>
                  </CardContent>
</Card>
    </div>
)
}
}


/*<PostWidget title="birthday gift for my roommate" 
            captions={["lots of fun, enjoyed the challenge of having to emulate the very specific shape of a cat. could not add facial features because i knew that i would butcher it"]}
            iscarousel={false}
            srcs={["/crochet/cat.jpeg"]} /> */

