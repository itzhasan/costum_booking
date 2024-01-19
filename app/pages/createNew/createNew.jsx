import services from "@/app/data/createCostume/services"
export const CreateNew = () => {
    return (
        <div className="flex items-center justify-center">
            <div className="">
                <div className="flex justify-center p-11">
                    <h1 className="font-semibold text-4xl"> What type of services do you provide? </h1>
                </div>

                <div className="grid grid-cols-3 grid-flow-row gap-4 p-10">
                    {
                        services.map((el) => (
                            <div className="border-2 flex p-2 hover:bg-amber-200 gap-5 rounded-[20px] bg-slate-100">
                                <div className="flex items-center text-3xl ">
                                    {el.icon}
                                </div>

                                <div>
                                    <h1>{el.name}</h1>
                                    <h1>{el.describtion}</h1>
                                </div>
                            </div>

                        ))
                    }
                </div>
                <div className="flex justify-between mb-14 px-20 items-center ">
                    <a href="#" className="font-semibold underline"> - Back</a>
                    <button className="bg-blue-500 py-3 px-4 rounded-[20px] font-semibold myBox text-white">Next</button>
                </div>
            </div>
        </div>
    )
}