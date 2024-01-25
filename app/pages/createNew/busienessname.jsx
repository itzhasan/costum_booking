import items from '@/app/data/createCostume/countaries';
import { useState } from 'react';
import Dropdown from '@/app/components/dropdown/dropdown';
export const BusinessName = () => {

   
  
    return (
        <div className="px-9">
            <div>
                <div className="flex justify-center p-11">
                    <h1 className="font-semibold text-4xl"> Just One last Thing!</h1>
                </div>
                <div className="mb-5">
                    <input type="text" className="border-2  outline-none p-3 text-lg rounded-[10px]" placeholder="What is your busieness name" />

                </div>
                <Dropdown/>
                <div className="mt-5">
                    <input type="text" className="border-2  outline-none p-3 text-lg rounded-[10px]" placeholder="Governorate" />

                </div>
            </div>

        </div>
    )
}