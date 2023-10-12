"use client"

import Link from "next/link"
import GetList from "./getlist/page"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../components/context/SearchContext"

export default function Dashboard(){
    return(
        <section className="flex flex-col md:flex-col md:gap-10 p-10">
        <JobPosted/>
        <GetList/>
        </section>
    )
}

function JobPosted(){

    const[list,setList] = useState([])
    const[state,setState] = useContext(AuthContext);

    useEffect(()=>{
        let val = true
       async function getList(){
        if(val){
            try{
                const req = await fetch(localStorage.getItem("role") == "User" ? 
                "https://localhost:7241/api/JobListing/GetListOfJob" : 
                "https://localhost:7241/api/JobApplication/GetListOfApplicant",{
                    method:"GET"

                })
                const res = await req.json()
                setList((prevValue)=>prevValue=res)
                console.log(res)
            }catch(error){
                console.log(error)
            }
        }
    }
    getList()
        return ()=>{
            val = false
        }
    },[])
    
    switch(localStorage.getItem("role")){
        case "User":
        return(
        <section className="w-fit">
        <h1 className="text-lg text-loginicon font-semibold mb-5">Latest Vacancy</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
        {state.searchTerm == "" ? (list.map((item)=> (
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={`/dashboard/getlist/${item.jobId}`}>
        <h1>Job Posted At:{item?.datePosted}</h1>
        <h2>Job Posted Title:{item?.jobTitle}</h2>
        </Link>
        </div>))):(
        list.filter((item)=>item?.jobTitle.toLowerCase().includes(state.searchTerm.substring(0,5))).map((item) => (
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={`/dashboard/getlist/${item.jobId}`}>
            <h1>Job Posted At:{item?.datePosted}</h1>
            <h2>Job Posted Title:{item?.jobTitle}</h2>
            </Link>
            </div>))
        )}
        </div>
        </section>
    )
    break;
    case "Admin":
        return(
            <section className="w-fit">
        <h1 className="text-lg text-loginicon font-semibold mb-5">Vacancy Requests</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
        {state.searchTerm == "" ? (list.map((item)=> (
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={`/dashboard/getlist/${item.id}`}>
        <h1>Job Posted At:{item?.applyDate}</h1>
        <h2>Job Title:{item?.jobTitle}</h2>
        </Link>
        </div>))):(
        list.filter((item)=>item?.jobTitle.toLowerCase().includes(state.searchTerm.substring(0,5))).map((item) => (
            <div className="form-card flex flex-col gap-3 p-5">
             <Link href={`/dashboard/getlist/${item.id}`}>
             <h1>Job Posted At:{item?.applyDate}</h1>
             <h2>Job Posted Title:{item?.jobTitle}</h2>
             </Link>
            </div>))
        )}
        </div>
        </section>
        )
        break;
        default:
        break;     
    }
}