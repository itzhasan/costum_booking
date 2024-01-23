'use client'
import { useRouter } from "next/navigation";

export default function Signup(){
    const router = useRouter()

    return (
        <div className=" container flex items-center justify-center">
            
            <form className="mx-[10px] rounded-[20px] p-[40px] w-[420px] myblur border-2 border-solid border-white text-white ">
                <h1 className="text-4xl text-center	">Sign Up</h1>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="text" placeholder="First Name" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                   
                </div>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="text" placeholder="Last Name" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                   
                </div>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="text" placeholder="Email" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                   
                </div>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="password" placeholder="Password" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                   
                </div>
        
                <button type="submit" className="mt-4 w-full h-[45px] bg-white outline-none rounded-[40px] text-[16px] text-slate-950 font-bold">Sign Up</button>
                <div className="text-[14.5px] text-center mt-[20px]"><p>Already have account ? <a onClick={()=>(router.push('/auth/login'))} className="hover:underline font-semibold">Login</a></p></div>

            </form>

        </div>
    )
}