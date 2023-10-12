"use client"

import { AiOutlineClose } from "react-icons/ai"
import "../../globals.css"
import { useState } from "react"

export default function PostForm(props){

    const[postdetail,setPostDetail] = useState({companyName:"",jobLocation:"",jobTitle:"",jobDescription:""})

    const handleButton = (val)=> {
        props.handleClose(val)
    } 
    
    const handleChange = (e)=>{
        setPostDetail((prevValue)=>({...prevValue,[e.target.name]:e.target.value}))
    }

    const handleSubmit =async(e)=>{
        e.preventDefault()
        try{
            let req = await fetch("https://localhost:7241/api/JobListing/JopPost",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify(postdetail)
            })
            let res = await req.json()
            console.log(res)
        }catch(error){
            console.log(error)
        }
        console.log(postdetail)
    }

    return(
        <section className="w-full">
            <form className="form-card flex flex-col gap-5 md:flex-col md:gap-5 p-5" onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-between md:mb-5">
                <h1 className="text-xl font-bold ">Post Vacancy</h1>
                <button onClick={()=>handleButton(0)} className="p-5 bg-iconcolor rounded-full"><AiOutlineClose/></button>
                </div>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <label htmlFor="company" className="w-20">Company</label>
                <input type="text" name="companyName" className="post-job-input-field" onChange={handleChange} value={postdetail.companyName}/>
                </div>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <label htmlFor="location" className="w-20">Location</label>
                <input type="text" name="jobLocation" className="post-job-input-field" onChange={handleChange} value={postdetail.jobLocation}/>
                </div>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <label htmlFor="company" className="w-20">Title</label>
                <input type="text" name="jobTitle" className="post-job-input-field" onChange={handleChange} value={postdetail.jobTitle}/>
                </div>
                <div className="flex flex-col md:flex-col">
                <label htmlFor="company">Description</label>
                <textarea rows={10} name="jobDescription" className="post-job-input-field" onChange={handleChange} value={postdetail.jobDescription}/>
                </div>
                <button type="submit" className="text-base font-semibold text-iconcolor bg-loginicon py-2">Submit</button>
            </form>
        </section>
    )

}