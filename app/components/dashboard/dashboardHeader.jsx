export const DashboardHeader = () => {
    return (
        <div>
            <div className="flex justify-between py-4 px-[120px] bg-slate-200 myBox">
                <div className="flex items-center gap-3">
                    <div>
                     <h1>mo</h1>   
                    </div>
                    
                    <h1 className="font-medium">Hasan</h1>
                </div>

                <div>
                    <button className="bg-blue-500 p-2 myBox rounded-[10px] font-medium">+ Create new</button>
                </div>
            </div>
        </div>

    )
}