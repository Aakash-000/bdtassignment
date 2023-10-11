"use client"
import LoginImage from "../../public/assets/loginimage.jpg"
import {AiOutlineUserSwitch} from "react-icons/ai"
import {RiLockPasswordLine} from "react-icons/ri"

import '../globals.css'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage(){

    const [logindetail,setLoginDetail] = useState({username:"",password:""})
    const[istext,setText] = useState(false)
    const router = useRouter()
    
    const handleSubmit = (e)=> {
        e.preventDefault()
        localStorage.setItem("role","USER")
        router.push("/dashboard")
    }

    return(
    <section className="min-h-screen flex flex-col justify-center md:flex-row md:items-center">
    <div className="hidden md:block md:w-2/3 md:h-full">
    <img src={LoginImage.src} className="w-full h-screen object-cover object-center" alt="LoginPage"/>
    </div>
    <div className="w-full md:w-1/3 px-6  md:pr-10 md:py-2">
    <form className="login-form form-card" onSubmit={handleSubmit}>
    <h1 className="text-2xl font-semibold text-center">Login</h1>
    <div className="relative">
    <AiOutlineUserSwitch className="login-icon"/>
    <input type="text" className="login-field" onChange={(e)=>setLoginDetail((prevValue)=>({...prevValue,username:e.target.value}))} placeholder="Username" value={logindetail.username}/>
    </div>
    <div className="relative">
    <RiLockPasswordLine className="login-icon"/>
    <input type={istext ? "text" : "password"} onFocus={()=>setText((prevValue)=>prevValue=!prevValue)} onChange={(e)=>setLoginDetail((prevValue)=>({...prevValue,password:e.target.value}))} className="login-field" placeholder="Password" value={logindetail.password}/>
    </div>
    <button type="submit" className="login-submit">Sign In</button>
    <Link href="/register">
    <span className="text-lg font-semibold underline cursor-pointer">*Register for Account!</span>
    </Link>
    </form> 
    </div>
    </section>
    )
}