import Navbar from "@/components/nav-bar";
import Image from 'next/image'
import EmblaCarousel from '@/components/carousel/EmblaCarousel'
import { EmblaOptionsType } from 'embla-carousel'
import {  getCrochetPosts, getPostImages } from '@/lib/notion';


import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
import { GetStaticProps } from "next";
import Head from "next/head";




type PostWithImages = {
  title: string;
  subtitle: string;
  type: boolean;
  captions: string[];
  srcs: string[];
  subcaps: string[];
};

type Props = {
  posts: PostWithImages[];
};


export default function CrochetPage({posts}:Props){


  /*const listitems = crochetposts.map(post=>{
    return <PostWidget title={post.title} subtitle={post.subtitle} captions={post.captions} srcs={post.srcs} iscarousel={post.iscarousel} subcaps={post.subcaps} />
  })*/
    const listitems = posts.map((post,index)=>{
      return <PostWidget key={index} title={post.title} subtitle={post.subtitle} captions={post.captions} srcs={post.srcs} iscarousel={post.type} subcaps={post.subcaps} />
    })



    return (
      <>
      <Head>
<title>Avi Kumar | Crochet</title>
<link rel="canonical" href="https://jahnavikumar.org/crochet" />

<meta name="description" content="the following is an (unfinished) chronological documentation of my experiences/accomplishments/creations in crochet, somewhat organized into chapters and by personal milestones. thank you for viewing and i hope you enjoy!"/>
<meta name="keywords" content="crochet, art, blog, freeform crochet, crochet diary, freeform, tapestry, creative, swe, software engineering, developer, software developer, computer science, comp sci, unc, unc chapel hill, portfolio, engineer, webdev, web dev"/>
<meta name="robots" content="index, follow" />
<meta name="googlebot" content="index, follow" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta charSet="utf-8" />

{/* Open Graph */}
<meta property="og:site_name" content="Avi Kumar" />
<meta property="og:locale" content="en_US" />
<meta property="og:title" content="Avi Kumar | Crochet" />
<meta property="og:description" content="the following is an (unfinished) chronological documentation of my experiences/accomplishments/creations in crochet, somewhat organized into chapters and by personal milestones. thank you for viewing and i hope you enjoy!" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://jahnavikumar.org" />
<meta property="og:image" content="https://jahnavikumar.org/og-image.png" />
<meta property="og:image:alt" content="Avi Kumar | Software Engineer" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />

</Head>

    <div className="flex-grow">
          <Navbar currentpage="Crochet"/>
          <section className="pb-6">
            <div className="container mx-auto text-center">
            <h2 className="text-3xl text-viridian font-serif font-bold mb-4">crochet photo diary and gallery</h2>
            <p className="text-lg text-gray-700">more to come soon! this page is under construction.</p>
            </div>
          </section>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="relative w-1/6 shadow-lg border-2 border-viridian min-h-[334px]">
            <Image 
            src="/crochet/IMG_9727.webp"
            alt="crochet tapestry image"
            fill
            className="object-contain"
            sizes="(max-width:768px) 100vw, 200px"
            />
            </div>
            <div className="max-h-[200px] min-w-[151px] min-h-[200px] relative border-viridian border-2">
          <Image 
          src="/crochet/legwarmers.webp" 
          alt="Image 3" 
          fill
          className="object-contain"/>  
          </div>
          <div className="w-1/6 shadow-md border-2 border-viridian relative min-h-[334px]">
        <Image 
        src="/crochet/IMG_1412.webp" 
        alt="Image 2" 
        fill
        className="object-cover"/>
        </div>
        <div className="relative max-h-[230px] border-2 border-viridian min-w-[173px] min-h-[230px]">
        <Image 
        src="/crochet/face.webp" 
        alt="Image 2" 
        fill
        className=" object-cover  "/>
        </div>
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
    </>)
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
                        <div className="relative border-2 max-h-[400px] max-w-[400px] min-h-[400px] min-w-[301px] border-viridian shadow-lg shadow-black rounded-md">
                          <Image
                          alt="crochet post image"
                          fill
                          className="object-contain"
                          src={srcs[0]} />
                        </div>
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

            export const getStaticProps: GetStaticProps = async()=>{
              const posts = await getCrochetPosts();
            //  console.log("Posts from Notion:", posts);
          
              const postsWithImages = await Promise.all(
                posts.map(async (post) => {
                  const images = await getPostImages(post.id);
            //      console.log(`Images for ${post.title}:`, images);
          
                  return {
                    title: post.title,
                    subtitle: post.subtitle,
                    type: post.type === "carousel",
                    captions: images.map((img) => img.caption),
                    srcs: images.map((img) => img.src),
                    subcaps: images.map((img) => img.subcaption),
                  };
                })
              );
          
              return {
                props: {
                  posts: postsWithImages,
                },
                revalidate: 60,
              };
            
          }
          