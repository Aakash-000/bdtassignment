"use client"
import Link from "next/link";
import {RxHamburgerMenu} from "react-icons/rx"
import { useContext, useState } from "react";
import { AuthContext } from "../context/SearchContext";
import "../../globals.css"


export default function Navbar(){
  const [searchcontext,setSearchContext] = useState({searchTerm:"",category:[],sidebar:false})
  const [state,setState] = useContext(AuthContext);
 
  const handleClick = (e)=>{
  e.preventDefault()
  setState((prevValue)=>({...prevValue,searchTerm:searchcontext.searchTerm}))
  console.log(state)
  }
  
  const handleSidebar = ()=> {
    setSearchContext((prevValue)=>({...prevValue,sidebar:!searchcontext.sidebar}))
    setState((prevValue)=>({...prevValue,sidebar:searchcontext.sidebar}))
  }

  console.log(state.sidebar)

  return (
    <>
    <header className="shadow-md">
        <nav className="flex flex-row bg-navbarbg items-center justify-evenly py-3 px-2 sticky top-0 z-10">
        <button onClick={handleSidebar}><RxHamburgerMenu style={{fontSize:"1.5rem",color:"CaptionText"}}/></button>
        <h1 className="text-3xl font-extrabold">
        <Link href="/dashboard" className="text-logocolor no-underline hover:text-white">
        JoB
        </Link>
        </h1>
        <div className="relative">
        <form className="flex flex-row gap-20 items-start md:flex-row md:items-center">
        <div className="relative nav-search shadow-xl">
        <svg className="absolute top-1.5 left-3" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.7959 19.2041L16.3437 14.75C17.6787 13.0104 18.3019 10.8282 18.087 8.64607C17.8722 6.4639 16.8353 4.44516 15.1867 2.99937C13.5382 1.55357 11.4014 0.788988 9.20984 0.860713C7.01829 0.932437 4.93607 1.8351 3.38558 3.38559C1.83509 4.93608 0.932429 7.0183 0.860705 9.20985C0.78898 11.4014 1.55356 13.5382 2.99936 15.1867C4.44515 16.8353 6.46389 17.8722 8.64606 18.087C10.8282 18.3019 13.0104 17.6787 14.75 16.3438L19.2059 20.8006C19.3106 20.9053 19.4348 20.9883 19.5715 21.0449C19.7083 21.1016 19.8548 21.1307 20.0028 21.1307C20.1508 21.1307 20.2973 21.1016 20.4341 21.0449C20.5708 20.9883 20.695 20.9053 20.7997 20.8006C20.9043 20.696 20.9873 20.5717 21.044 20.435C21.1006 20.2983 21.1298 20.1517 21.1298 20.0037C21.1298 19.8558 21.1006 19.7092 21.044 19.5725C20.9873 19.4358 20.9043 19.3115 20.7997 19.2069L20.7959 19.2041ZM3.12499 9.5C3.12499 8.23915 3.49888 7.0066 4.19938 5.95824C4.89987 4.90988 5.89551 4.09278 7.06039 3.61027C8.22527 3.12776 9.50707 3.00151 10.7437 3.2475C11.9803 3.49348 13.1162 4.10064 14.0078 4.9922C14.8994 5.88376 15.5065 7.01967 15.7525 8.2563C15.9985 9.49293 15.8722 10.7747 15.3897 11.9396C14.9072 13.1045 14.0901 14.1001 13.0418 14.8006C11.9934 15.5011 10.7608 15.875 9.49999 15.875C7.80977 15.8733 6.18927 15.2011 4.99411 14.0059C3.79894 12.8107 3.12673 11.1902 3.12499 9.5Z" fill="black" fill-opacity="0.5"/>
        </svg>
        <input 
        type="text"
        required
        onChange={(e)=>setSearchContext((prevValue)=>({...prevValue,searchTerm:e.target.value}))}
        value={searchcontext.searchTerm}
        className="ml-10 py-2 px-2 w-full first-letter: text-loginicon outline-none text-sm"
        placeholder="Search"/>
        </div>
        <button className="hero-button bg-navbutton px-4 py-1 rounded-full outline outline-1 border-t-bordercolor" type="submit" onClick={handleClick}>Search</button>
        </form>
        </div>
        <h1 className="text-base font-bold">{localStorage.getItem("role")}</h1>
    </nav>
    </header>
    </>
  )
}