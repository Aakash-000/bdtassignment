"use client"
import LoginImage from "../../public/assets/loginimage.jpg"
import { AiOutlineUserSwitch } from "react-icons/ai"
import { RiLockPasswordLine } from "react-icons/ri"
import { AiOutlineMail } from "react-icons/ai"
import '../globals.css'
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function LoginPage() {

    const [istext, setText] = useState(false)
    const [userdetail, setUserDetail] = useState({ userName: "", role: "", password: "" })
    const router = useRouter()

    const handleChange = (e) => {
        setUserDetail((prevValue) => ({ ...prevValue, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const req = await fetch("https://localhost:7241/api/Auth/Signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json' // Set the Content-Type header to JSON
                },
                body: JSON.stringify(userdetail)
            });

            // if (req.ok) {
            //     const res = await req.json();
            //     console.log(res);
            // } else {
            //     console.error('Request failed with status:', req.status);
            // }
            const res = await req.json()
            console.log(res)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <section className="min-h-screen flex flex-col justify-center md:flex-row md:items-center">
            <div className="hidden md:block md:w-2/3 md:h-full">
                <img src={LoginImage.src} className="w-full h-screen object-cover object-center" alt="LoginPage" />
            </div>
            <div className="w-full md:w-1/3 px-6  md:pr-10 md:py-2">
                <form className="login-form form-card" onSubmit={handleSubmit}>
                    <h1 className="text-2xl font-semibold text-center">
                        Register
                    </h1>
                    <div className="relative">
                        <AiOutlineMail className="login-icon" />
                        <input type="email" name="userName" required onChange={handleChange} className="login-field" placeholder="Email" value={userdetail.userName} />
                    </div>
                    <div className="relative">
                        <AiOutlineUserSwitch className="login-icon" />
                        <select className="w-48 px-4 py-1 outline-none bg-loginform border-b-2" onChange={(e) => setUserDetail((prevValue) => ({ ...prevValue, role: e.target.value }))}>
                            <option value="Admin">Admin</option>
                            <option value="User">User</option>
                        </select>
                    </div>
                    <div className="relative">
                        <RiLockPasswordLine className="login-icon" />
                        <input type={istext ? "text" : "password"} required name="password" onChange={handleChange} onFocus={() => setText((prevValue) => prevValue = !prevValue)}
                            className="login-field" placeholder="Password" value={userdetail.password} />
                    </div>
                    <button type="submit" className="login-submit">Sign Up</button>
                    <Link href="/login">
                        <span className="text-lg font-semibold underline cursor-pointer">*Back to Login!</span>
                    </Link>
                </form>
            </div>
        </section>
    )
}