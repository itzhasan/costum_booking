import mainBody from '../../assets/main/mainbody.jpeg'
import Image from 'next/image'
export const MainBody = () => {
    return(
        <div>
            <div className='flex mx-[40px] gap-36'>
               <h1 className='text-[40px] font-bold w-[50%]'>Discover the easiest way to schedule appointments with the #1 online booking system</h1>
            <Image src={mainBody} className='w-[500px]'/> 
            </div>
            
        </div>
    )

}
