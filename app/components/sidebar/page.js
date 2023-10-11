"use client"
import { useContext } from "react"
import {AiOutlinePullRequest,AiOutlineFileAdd, AiOutlineLogout} from "react-icons/ai"
import { AuthContext } from "../context/SearchContext"
import Link from "next/link"
import { useRouter } from "next/navigation"

export default function Sidebar(){

    const [state] = useContext(AuthContext)
    const router = useRouter()

    return(
        <section className={state.sidebar ? "sticky lef-0 w-1/6 h-screen bg-iconcolor" : "sticky left-0 w-14 h-screen bg-iconcolor"}>
        <ul className={state.sidebar ? "flex flex-col pl-6 py-4 mt-10 gap-5" : "flex flex-col items-start pl-1 py-4 mt-10 gap-5"}>
            {/* <div className="flex flex-row items-center gap-3">
            <AiOutlinePullRequest style={{fontSize: state.sidebar ? "1.7rem" : "2.2rem"}}/>
            <li className={state.sidebar ? "sidebar-links" : "hidden"}>Get Request</li>
            </div> */}
            {localStorage.getItem("role") == "ADMIN" && 
            <Link href={"/dashboard/postjob"}>
            <div className="flex flex-row items-center gap-3 cursor-pointer">
            <AiOutlineFileAdd style={{fontSize: state.sidebar ? "1.5rem" : "1.7rem"}}/>
            <li className={state.sidebar ? "sidebar-links" : "hidden"}>Post Job</li>
            </div>
            </Link>}
            <div onClick={()=>{
                localStorage.clear()
                router.push("/login")}} className="flex flex-row items-center gap-3 cursor-pointer">
            <AiOutlineLogout style={{fontSize: state.sidebar ? "1.5rem" : "1.7rem"}}/>
            <li className={state.sidebar ? "sidebar-links" : "hidden"}>Logout</li>
            </div>
        </ul>
        </section>
    )
}