"use client";
import { Popover, Steps } from "antd";
import { BusinessDescribtion } from "../pages/createNew/businessDescribtion";
import { useState,useEffect } from "react";
import { CreateNew } from "../pages/createNew/createNew";
import { ServiceMenu } from "../pages/createNew/serviceMenu";
import { BusienssTimes } from "../pages/createNew/businessHours";
import { BusinessName } from "../pages/createNew/busienessname";
export default function GetStarted() {
  const [page , setPage] = useState(<BusinessDescribtion />);
  const [count,setCount] = useState(0);
  useEffect(() => {
    switch (count){
    case 0:setPage( <BusinessDescribtion />);
    break;
    case 1:setPage( <CreateNew />);
    break;
    case 2:setPage(<ServiceMenu/>);
    break;
    case 3:setPage(<BusienssTimes/>);
    break;
    case 4:setPage(<BusinessName/>)
    break;

  }
    }, [count]);
  
  return (
    <div className="p-9">
      <Steps current={count} progressDot={customDot} items={[{}, {}, {}, {}, {}]} />
      {page}
      <div className="flex justify-between mt-20 px-20 items-center bottom-0 fixed	w-full mb-4">
        <a onClick={()=>(setCount(count===0?count:count-1))} className="font-semibold underline cursor-pointer">
          - Back
        </a>
        <button onClick={()=>(setCount(count===4?count:count+1))} className="bg-blue-500 py-3 px-4 rounded-[20px] font-semibold myBox text-white">
         {count===4? 'Done':'Next'}
        </button>
      </div>
    </div>
  );
}
const customDot = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
