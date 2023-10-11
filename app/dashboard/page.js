"use client"

import Link from "next/link"
import GetList from "./getlist/page"

export default function Dashboard(){
    return(
        <section className="flex flex-col md:flex-col md:gap-10 p-10">
        <JobPosted/>
        <GetList/>
        </section>
    )
}

function JobPosted(){
    
    switch(localStorage.getItem("role")){
        case "USER":
        return(
        <section className="w-fit">
        <h1 className="text-lg text-loginicon font-semibold mb-5">Latest Vacancy</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={"/dashboard/getlist/id"}>
        <h1>Job Posted At</h1>
        <h2>Job Posted Title</h2>
        </Link>
        </div>
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={"/dashboard/getlist/id"}>
        <h1>Posted Time</h1>
        <h2>Posted Title</h2>
        </Link>
        </div>
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={"/dashboard/getlist/id"}>
        <h1>Posted Time</h1>
        <h2>Posted Title</h2>
        </Link>
        </div>
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={"/dashboard/getlist/id"}>
        <h1>Posted Time</h1>
        <h2>Posted Title</h2>
        </Link>
        </div>
        <div className="form-card flex flex-col gap-3 p-5">
        <Link href={"/dashboard/getlist/id"}>
        <h1>Posted Time</h1>
        <h2>Posted Title</h2>
        </Link>
        </div>
        </div>
        </section>
    )
    break;
    case "ADMIN":
        return(
            <section className="w-fit">
            <h1 className="text-lg text-loginicon font-semibold mb-5">Vacancy Requests</h1>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-4 md:gap-4">
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={"/dashboard/getlist/id"}>
            <h1>Posted Time</h1>
            <h2>Posted Title</h2>
            </Link>
            <div className="flex flex-row justify-start gap-3">
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Accept</button>
            <button className="px-4 py-1 bg-navbarbg text-base font-semibold">Reject</button>
            </div>
            </div>
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={"/dashboard/getlist/id"}>
            <h1>Posted Time</h1>
            <h2>Posted Title</h2>
            </Link>
            <div className="flex flex-row justify-start gap-3">
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Accept</button>
            <button className="px-4 py-1 bg-navbarbg text-base font-semibold">Reject</button>
            </div>
            </div>
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={"/dashboard/getlist/id"}>
            <h1>Posted Time</h1>
            <h2>Posted Title</h2>
            </Link>
            <div className="flex flex-row justify-start gap-3">
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Accept</button>
            <button className="px-4 py-1 bg-navbarbg text-base font-semibold">Reject</button>
            </div>
            </div>
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={"/dashboard/getlist/id"}>
            <h1>Posted Time</h1>
            <h2>Posted Title</h2>
            </Link>
            <div className="flex flex-row justify-start gap-3">
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Accept</button>
            <button className="px-4 py-1 bg-navbarbg text-base font-semibold">Reject</button>
            </div>
            </div>
            <div className="form-card flex flex-col gap-3 p-5">
            <Link href={"/dashboard/getlist/id"}>
            <h1>Posted Time</h1>
            <h2>Posted Title</h2>
            </Link>
            <div className="flex flex-row justify-start gap-3">
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Accept</button>
            <button className="px-4 py-1 bg-navbarbg text-base font-semibold">Reject</button>
            </div>
            </div>
            </div>
            </section>
        )
        break;
        default:
        break;     
    }
}