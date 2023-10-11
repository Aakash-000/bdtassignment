"use client"

import { useState } from "react"
import "../../globals.css"
import PostForm from "../../components/postform/page"

export default function PostJob(){
    const[button,setButton] = useState(false)

    const handlebtn = (val)=> {
        if(val == 1){
        setButton((prevValue) => prevValue = true)
        }else if(val == 0){
        setButton((prevValue) => prevValue = false)
        }
    }

    return(
        <section className="w-full relative flex flex-col items-center">
        {button &&
        <div className={button ? "block w-full p-5 md:w-2/4 md:p-0 md:mt-10" : "hidden"}>
        <PostForm handleClose={handlebtn}/>
        </div>}
        <div className="absolute top-0 right-20  flex flex-row md:flex-row md:items-center md:mt-10 gap-2">
        <span className="text-xl font-bold">Post Job</span>
        <button className="py-3 px-5 bg-landingtext outline-none font-bold text-4xl text-iconcolor rounded-full" onClick={()=>handlebtn(1)}>+</button>
        </div>
        
        </section>
    )
}