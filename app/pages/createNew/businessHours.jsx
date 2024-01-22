'use client'
import times from "@/app/data/createCostume/times";
import days from "@/app/data/createCostume/days";
import { useState } from "react";
import { Button, Modal } from 'antd';

export const BusienssTimes = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div>
            <div className="flex justify-center p-11">
                <h1 className="font-semibold text-4xl">Add business hours to let customers know when you are open</h1>
            </div>

            {
                days.map((el) => (
                    <div>
                        <label><input type="checkbox" />{el.day}</label>
                    </div>
                ))
            }
            <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
}