import mainBody from '../../assets/main/mainbody.jpeg'
import Image from 'next/image'
import { useRouter } from "next/navigation";

export const MainBody = () => {
    const router = useRouter();

    function handleClick(){

        
    }
    return(
        <div>
            <div className='flex pl-[70px] gap-36 pt-[90px]'>
                <div className='w-[50%]'>
                    <h1 className='text-[40px] font-bold '>Discover the easiest way to schedule appointments with the #1 online booking system</h1>
                    <p className='text-left text-slate-600 text-xl mt-5'>Save time spent on coordinating appointments over phone and email with an all-in-one appointment booking software. Accept online bookings 24x7, automate payments, business management, marketing, and more!</p>
                    <button onClick={() => router.push("/create")} className='myBox bg-red-500 w-[400px] h-[60px] border-2 rounded-[30px] mt-[50px] border-gray-950 text-white text-lg font-medium'>Get started now!</button>
                </div>
               <Image src={mainBody} className='w-[500px] mt-[-70px]'/> 
            </div>
        </div>
    )

}
