import { DashboardHeader } from "@/app/components/dashboard/maincreate/dashboardHeader"
import { useRouter } from "next/navigation";

export function Dashboard(){
    const router = useRouter();

    return(
        <div>
            <div className="flex justify-center pt-16 text-4xl font-semibold">
                <h1>Choose template</h1>
            </div>
        </div>
    )
}