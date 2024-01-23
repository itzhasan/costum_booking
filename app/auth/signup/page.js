"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDob] = useState("");
  const [password, setPassword] = useState("");


  const handleSignup = async () => {
    console.log("start post");
    try {
      const response = await axios.post("http://localhost:8000/users/signup", {
        name,
        email,
        age,
        dob,
        password,
      });
    //   const token = response.data.token;
      console.log("name:",name);
      console.log("posting");
    //   localStorage.setItem("token", token);
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
        console.error("Response headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("No response received. Request:", error.request);
      } else {
        // Something happened in setting up the request
        console.error("Error setting up the request:", error.message);
      }
    }
  };
  return (
    <div className=" container flex items-center justify-center">
      <div className="mx-[10px] rounded-[20px] p-[40px] w-[420px] myblur border-2 border-solid border-white text-white ">
        <h1 className="text-4xl text-center	">Sign Up</h1>
        <div className="relative w-full h-[50px] my-[30px]">
          <input
            onChange={(el)=>setName(el.target.value)}
            type="text"
            placeholder="Name"
            required
            className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"
          />
        </div>
        <div className="relative w-full h-[50px] my-[30px]">
          <input
            onChange={(el)=>setEmail(el.target.value)}
            type="text"
            placeholder="Email"
            required
            className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"
          />
        </div>
        <div className="relative w-full h-[50px] my-[30px]">
          <input
            onChange={(el)=>setAge(el.target.value)}
            type="text"
            placeholder="Age"
            required
            className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"
          />
        </div>
        <div className="relative w-full h-[50px] my-[30px]">
          <input
            onChange={(el)=>setDob(el.target.value)}
            type="text"
            placeholder="DOB"
            required
            className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"
          />
        </div>

        <div className="relative w-full h-[50px] my-[30px]">
          <input
            onChange={(el)=>setPassword(el.target.value)}
            type="password"
            placeholder="Password"
            required
            className="w-full h-full bg-transparent outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base text-white pr-[45px] pl-[20px] py-[20px]"
          />
        </div>

        <button
          onClick={handleSignup}
          className="mt-4 w-full h-[45px] bg-white outline-none rounded-[40px] text-[16px] text-slate-950 font-bold"
        >
          Sign Up
        </button>
        <div className="text-[14.5px] text-center mt-[20px]">
          <p>
            Already have account ?
            <a
              onClick={() => router.push("/auth/login")}
              className="hover:underline font-semibold"
            >
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
