"use client"
import './globals.css'
import Image from "../public/assets/landingimage.jpg"
import {AiOutlineArrowRight} from "react-icons/ai"
import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (
    <main className="flex flex-col gap-10 items-start md:flex-row md:items-center">
    <div className="flex-0.7 min-h-full">
    <img src={Image.src} className="h-3/4 object-center object-cover  md:h-screen" alt="LandingImage"/>
    </div>
    <div className="flex-0.3">
      <h1 className="text-2xl font-bold md:text-5xl md:font-bold">Welcome <span className="md:text-5xl text-landingtext underline">Find Best Job Here!</span></h1>
      
      <button className="p-2 md:p-5 bg-landingtext border-none rounded-full my-4 md:my-5" onClick={()=>router.push("/login")}>
      <AiOutlineArrowRight className="landing-icon"/>
      </button>

    </div>
    </main>
  )
}
