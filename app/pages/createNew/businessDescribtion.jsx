import { businessDescribtion } from "@/app/data/createCostume/createData"
export const BusinessDescribtion=()=>{
    return(
        <div className="px-9">
            <div>
            <div className="flex justify-center p-11">
                    <h1 className="font-semibold text-4xl"> What best describes your business?</h1>
                </div>
                <div className="">
                    {
                        businessDescribtion.map((el)=>(
                            <div className="border-2 mt-7 p-4 flex gap-5">
                                <input type="checkbox" />
                                <div>
                                   <h1>{el.title}</h1>
                                   <h1>{el.description}</h1> 
                                </div>
                                
                            </div>
                        ))
                    }
                </div>
                <div className="flex justify-between mt-20 px-20 items-center ">
                    <a href="#" className="font-semibold underline"> - Back</a>
                    <button className="bg-blue-500 py-3 px-4 rounded-[20px] font-semibold myBox text-white">Next</button>
                </div>
                


            </div>
            
        </div>
    )
}