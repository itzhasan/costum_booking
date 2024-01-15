import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
export const Login = () => {
    return (
        <div className=" container flex items-center justify-center">
            
            <form className="mx-[10px] rounded-[20px] p-[40px] w-[420px] myblur border-2 border-solid border-white text-white ">
                <h1 className="text-4xl text-center	">Login</h1>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="text" placeholder="Email" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                    <FaUser className="absolute right-[20px] top-[50%] translate-y-[-50%] text-base"/>
                </div>
                <div className="relative w-full h-[50px] my-[30px]">
                    <input type="password" placeholder="Password" required className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"/>
                    <FaLock className="absolute right-[20px] top-[50%] translate-y-[-50%] text-base"/>
                </div>
                <div className="flex justify-between text-sm">
                    <label ><input type="checkbox" className="accent-white mr-[4px]"/>Remember me</label>
                    <a href="#" className="hover:underline">Forgot password?</a>
                </div>
                <button type="submit" className="mt-4 w-full h-[45px] bg-white outline-none rounded-[40px] text-[16px] text-slate-950 font-bold">Login</button>
                <div className="text-[14.5px] text-center mt-[20px]"><p>Don't have account? <a href="#" className="hover:underline font-semibold">Register</a></p></div>

            </form>

        </div>
    )
}