import Link from "next/link";


export default function Header(){
  //text-[#3a6d5b]...animate-color
    return(
        <header className="font-serif h-[100vh] min-h-[350px] w-full bg-puce flex flex-col justify-center px-4 sm:px-0">
        <div className="w-[70%] m-auto">
          <h1 className="block text-5xl font-bold text-[#f1f1f1]">
              Avi Kumar
            <span className="block text-3xl text-[#3a6d5b] font-normal">student, computer engineer, writer, professional question asker</span>
            <Link className=" text-[#3a6d5b] hover:underline mt-[50px] mb-[-80px] !text-xl  " href="/#cont">
              welcome to my page! &darr;
            </Link>
          </h1>
        </div>
      </header>
    )
}