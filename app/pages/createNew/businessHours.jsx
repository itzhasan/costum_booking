'use client'
import times from "@/app/data/createCostume/times";
import days from "@/app/data/createCostume/days";
import { useState } from "react";
import {  Modal } from 'antd';

export const BusienssTimes = () => {
    const [inputVal,setInputVal]=useState('9:00am')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (index) => {
        setIsModalOpen(true);
        console.log(index)
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="px-[40px]">
            <div className="flex justify-center p-11">
                <h1 className="font-semibold text-4xl">Add business hours to let customers know when you are open</h1>
            </div>
            <div className="my-5 w-[400px] ">
                {
                    days.map((el , index) => (
                        <div key={el.id} className="flex gap-3 text-xl my-6 items-center justify-between  ">
                            <div className="flex justify-around items-center  w-[500px]">
                                <label className="flex items-center mx-5 gap-3 text-slate-600"><input type="checkbox" className="size-5" checked={index<5?true:false}/>{el.day.substring(0, 3)}</label>
                                <input type="text" className="border-2 w-[100px] outline-none p-2 text-lg" value={el.from} onClick={()=>{showModal(index)}} />
                            </div>
                            <h1>To</h1>
                            <input type="text" className="border-2 w-[100px] outline-none p-2 text-lg" value={el.to} onClick={()=>{showModal(index)}} />

                        </div>
                    ))
                }
            </div>

            <div className="flex justify-between  px-20 items-center ">
                <a href="#" className="font-semibold underline"> - Back</a>
                <button className="bg-blue-500 py-3 px-4 rounded-[20px] font-semibold myBox text-white">Next</button>
            </div>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="grid grid-cols-3 w-full grid-flow-row gap-3">

                    {
                        times.map((el) => (
                            <div className="flex justify-center">
                                <button className=" text-xl font-semibold border-2 p-2 rounded-[10px]" onClick={()=>{}}>{el.time}</button>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </div>
    )
}