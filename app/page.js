'use client'
import { Index } from "./pages/index";
import { MainHeader } from "@/app/components/home/mainHeader";
import { MainBody } from "@/app/components/home/mainBody";
import { Footer } from "@/app/components/home/mainFooter";
import { useEffect } from "react";
export default function Home() {
  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //   if (!token) {
  //     router.push("/");
  //   } else {
  //     const decodedToken = decodeToken(token);
  //     setUser(decodedToken);
  //     console.log(decodedToken);
  //   }
  // }, []);
  return (
    <main className="">
      <MainHeader />
      <MainBody />
      <Footer />
    </main>
  );
}
