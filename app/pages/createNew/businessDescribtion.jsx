import { businessDescribtion } from "@/app/data/createCostume/createData"
import { useState } from "react"
export const BusinessDescribtion=()=>{
    const[active,setActive]=useState(0)
    function isActive(id){
        setActive(id);
    }
    return(
        <div className="px-9">
            <div>
            <div className="flex justify-center p-11">
                    <h1 className="font-semibold text-4xl"> What best describes your business?</h1>
                </div>
                <div className="">
                    {
                        businessDescribtion.map((el)=>(
                            <div className="border-2 mt-7 p-4 flex gap-5 items-center" onClick={()=>(isActive(el.id))} >
                                <input className="size-5" type="checkbox" onClick={()=>(isActive(el.id))} checked={active===el.id?true:false}/>
                                <div>
                                   <h1>{el.title}</h1>
                                   <h1>{el.description}</h1> 
                                </div> 
                            </div>
                        ))
                    }
                </div>
                
                


            </div>
            
        </div>
    )
}