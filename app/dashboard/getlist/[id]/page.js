"use client"

import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { AiFillMediumCircle } from "react-icons/ai"

export default function ApplicantDetail(){

    const[jobdetail,setJobDetail] = useState([])
    const [applicantdetail,setApplicantDetail] = useState({applicantName:"",applicantEmail:"",applicantLocation:""})
    const[individualapplicants,setIndividualApplicants] = useState([])
    const {id} = useParams()

    const handleChange = (e)=> {
        setApplicantDetail((prevValue)=>({...prevValue,[e.target.name]:e.target.value}))
    }

    useEffect(()=>{
        let val = true
       async function getList(){
        if(val){
            try{
                const req = await fetch("https://localhost:7241/api/JobListing/GetListOfJob",{
                    method:"GET"
                })
                const res = await req.json()
                setJobDetail((prevValue)=>prevValue=res)
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

    useEffect(()=>{
        let val = true
       async function getList(){
        if(val){
            try{
                const req = await fetch(`https://localhost:7241/api/JobApplication/GetJobApplicationById/${id}`,{
                    method:"GET"
                })
                const res = await req.json()
                setIndividualApplicants((prevValue)=>prevValue=res)
            
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

    const filtereddata = jobdetail.filter((item)=> parseInt(item.jobId) == parseInt(id))
    console.log(filtereddata)
    
    const handleBack = ()=> {
        window.history.back()
    }

    const handleSubmit= async(e)=> {
        e.preventDefault()
        try{
            const req = await fetch("https://localhost:7241/api/JobApplication/ApplyJob",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({...applicantdetail,jobTitle:filtereddata[0].jobTitle})
            })
            const res = await req.json()
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }

    switch(localStorage.getItem("role")){
    case "Admin":
    return(
        <section className="w-full flex flex-row md:flex-row md:items-start">
        <div className="form-card m-10 p-10 w-3/4 flex flex-col md:flex-col md:gap-10">
        <div className="flex flex-row md:flex-row md:items-center md:justify-between">        
        <h1 className="text-xl font-semibold text-loginicon">Details of Vacancy Requests</h1>
        <button className="px-3 py-1 bg-loginicon text-iconcolor" onClick={handleBack}>Back</button>
        </div>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col md:flex-col md:gap-4">
        <span className="text-lg ">Applicant Namee:{individualapplicants.applicantName}</span>
        <span className="text-lg ">Applicant Email:{individualapplicants.applicantEmail}</span>
        <span className="text-lg ">Applied Title:{individualapplicants.jobTitle}</span>
        <span className="text-lg ">Applicant Location:{individualapplicants.applicantLocation}</span>
        </div>
        <span className="">Applied Date:{individualapplicants.applyDate}</span>
        </div>
        </div>
        </section>
        )
        case "User":
        return(
            <section className="w-full flex flex-row md:flex-row md:items-start">
            <div className="form-card m-10 p-10 w-3/4 flex flex-col md:flex-col md:gap-10">
            <div className="flex flex-row md:flex-row md:items-center md:justify-between">        
            <h1 className="text-xl font-semibold text-loginicon">Details of Job Vacancy</h1>
            <button className="px-3 py-1 bg-loginicon text-iconcolor" onClick={handleBack}>Back</button>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col md:flex-col md:gap-4">
            <span className="text-lg">Posted At:{filtereddata[0]?.datePosted}</span>
            <span className="text-lg">Job Title:{filtereddata[0]?.jobTitle}</span>
            <span className="text-lg">Job Location:{filtereddata[0]?.jobLocation}</span>
            <span className="text-lg">Company Name:{filtereddata[0]?.companyName}</span>
            <br/>
            <hr/>
            <form onSubmit={handleSubmit}>
            <h1 className="text-xl font-semibold text-loginicon mb-5">Apply for Job</h1>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <label htmlFor="username" className="w-36">Applicant Name</label>
            <input type="text" name="applicantName" className="post-job-input-field" onChange={handleChange} value={applicantdetail.applicantName}/>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <label htmlFor="email" className="w-36">Applicant Email</label>
            <input type="email" name="applicantEmail" className="post-job-input-field" onChange={handleChange} value={applicantdetail.applicantEmail}/>
            </div>
            <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
            <label htmlFor="location" className="w-36">Applicant Location</label>
            <input type="text" name="applicantLocation" className="post-job-input-field" onChange={handleChange} value={applicantdetail.applicantLocation}/>
            </div>
        
            <button className="px-4 py-1 mt-4 bg-landingtext text-base font-semibold text-iconcolor">Apply</button>
            </form>
            </div>
            <div className="flex flex-col">
            <span className="text-lg">Job Description</span>
            <span className="text-base font-semibold">-{filtereddata[0]?.jobDescription}</span>
            </div>
            </div>
            </div>
            </section> 
        )  
    }  

}