"use client"

export default function ApplicantDetail(){

    const handleBack = ()=> {
        window.history.back()
    }

    const handleApply= ()=> {
        
    }

    switch(localStorage.getItem("role")){
    case "ADMIN":
    return(
        <section className="w-full flex flex-row md:flex-row md:items-start">
        <div className="form-card m-10 p-10 w-3/4 flex flex-col md:flex-col md:gap-10">
        <div className="flex flex-row md:flex-row md:items-center md:justify-between">        
        <h1 className="text-xl font-semibold text-loginicon">Details of Vacancy Requests</h1>
        <button className="px-3 py-1 bg-loginicon text-iconcolor" onClick={handleBack}>Back</button>
        </div>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col md:flex-col md:gap-4">
        <span className="">Applicant Name</span>
        <span className="">Applicant Email</span>
        <span className="">Applied Position</span>
        <span className="">Applied Company</span>
        </div>
        <span className="">Job Description</span>
        </div>
        </div>
        </section>
        )
        case "USER":
        return(
            <section className="w-full flex flex-row md:flex-row md:items-start">
            <div className="form-card m-10 p-10 w-3/4 flex flex-col md:flex-col md:gap-10">
            <div className="flex flex-row md:flex-row md:items-center md:justify-between">        
            <h1 className="text-xl font-semibold text-loginicon">Details of Job Vacancy</h1>
            <button className="px-3 py-1 bg-loginicon text-iconcolor" onClick={handleBack}>Back</button>
            </div>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
            <div className="flex flex-col md:flex-col md:gap-4">
            <span className="">Posted At</span>
            <span className="">Job Title</span>
            <span className="">Company Name</span>
            <button className="px-4 py-1 bg-landingtext text-base font-semibold text-iconcolor">Apply</button>
            </div>
            <span className="">Job Description</span>
            </div>
            </div>
            </section> 
        )  
    }  

}