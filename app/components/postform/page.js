"use client"

import { AiOutlineClose } from "react-icons/ai"
import "../../globals.css"

export default function PostForm(props){

    const handleButton = (val)=> {
        props.handleClose(val)
    } 
   
    return(
        <section className="w-full">
            <form className="form-card flex flex-col gap-5 md:flex-col md:gap-5 p-5">
                <div className="flex flex-row items-center justify-between md:mb-5">
                <h1 className="text-xl font-bold ">Post Vacancy</h1>
                <button onClick={()=>handleButton(0)} className="p-5 bg-iconcolor rounded-full"><AiOutlineClose/></button>
                </div>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <label htmlFor="company" className="w-15">Company</label>
                <input type="text" name="company" className="post-job-input-field"/>
                </div>
                <div className="flex flex-col items-start gap-4 md:flex-row md:items-center">
                <label htmlFor="company" className="w-20">Title</label>
                <input type="text" name="title" className="post-job-input-field"/>
                </div>
                <div className="flex flex-col md:flex-col">
                <label htmlFor="company">Description</label>
                <textarea rows={10} name="description" className="post-job-input-field"/>
                </div>
                <button type="submit" className="text-base font-semibold text-iconcolor bg-loginicon py-2">Submit</button>
            </form>
        </section>
    )

}