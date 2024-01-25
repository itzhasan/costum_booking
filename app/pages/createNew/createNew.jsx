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
               
            </div>
        </div>
    )
}