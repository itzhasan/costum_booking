'use client'
import times from "@/app/data/createCostume/times";
import days from "@/app/data/createCostume/days";
import { useState } from "react";
import { Modal } from 'antd';
import TimePicker from 'react-time-picker';


export const BusienssTimes = () => {
    const [inputVal, setInputVal] = useState('9:00am')
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

    //my arr
    const [daysData, setDaysData] = useState(days);

    const handleCheckboxChange = (id) => {
        setDaysData((prevDaysData) =>
            prevDaysData.map((day) =>
                day.id === id ? { ...day, selected: !day.selected } : day
            )
        );
    };

    const handleTimeChange = (id, field, value) => {
        setDaysData((prevDaysData) =>
            prevDaysData.map((day) =>
                day.id === id ? { ...day, [field]: value } : day
            )
        );
    };

    return (
        <div className="px-[40px]">
            <div className="flex justify-center p-11">
                <h1 className="font-semibold text-4xl">Add business hours to let customers know when you are open</h1>
            </div>
            <div className="my-5 w-[400px] ">
                {
                    daysData.map((day) => (
                        <div key={day.id} className="flex gap-3 text-xl my-6 items-center justify-between  ">
                            <div className="flex justify-around items-center  w-[500px]">
                                <label className="flex items-center mx-5 gap-3 text-slate-600"><input type="checkbox" className="size-5" checked={day.selected} onChange={() => handleCheckboxChange(day.id)} />{day.day.substring(0, 3)}</label>

                                <input type="text" className="border-2 w-[100px] outline-none p-2 text-lg" value={day.from}
                                    onChange={(e) => handleTimeChange(day.id, 'from', e.target.value)} />
                            </div>
                            <h1>To</h1>
                            <input type="text" className="border-2 w-[100px] outline-none p-2 text-lg" value={day.to}
                                onChange={(e) => handleTimeChange(day.id, 'to', e.target.value)} />

                        </div>
                    ))
                }
            </div>
            <Modal title="" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <div className="grid grid-cols-3 w-full grid-flow-row gap-3">
                    {
                        times.map((el) => (
                            <div className="flex justify-center">
                                <button className=" text-xl font-semibold border-2 p-2 rounded-[10px]" onClick={() => { }}>{el.time}</button>
                            </div>
                        ))
                    }
                </div>
            </Modal>
        </div>
    )
}