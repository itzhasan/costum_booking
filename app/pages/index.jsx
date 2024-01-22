//main function check if user have account or not
import {Login} from "./auth/login"

import { MainPage } from "./home/main"
import { Dashboard } from "./dashboard/dashboard"
import { CreateNew } from "./createNew/createNew"
import { BusinessDescribtion } from "./createNew/businessDescribtion"
import { ServiceMenu } from "./createNew/serviceMenu"
import { Signup } from "./auth/signup" 
import { BusienssTimes } from "./createNew/businessHours"

export const Index =() =>{
    return(
        <div>
            <BusienssTimes/>

        </div>
    )
}

