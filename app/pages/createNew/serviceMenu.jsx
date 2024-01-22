'use client'

import { useState, useEffect } from "react";

export const ServiceMenu = () => {
  const [inputFields, setInputFields] = useState([{ id: 1, value: '' }]);

  const addInputField = () => {
    const newInputField = {
      id: inputFields.length + 1,
      value: '',
    };
    setInputFields([...inputFields, newInputField]);
  };

  const handleInputChange = (id, event) => {
    const updatedInputFields = inputFields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setInputFields(updatedInputFields);
  };

  const deleteInputField = (id) => {
    const updatedInputFields = inputFields.filter((field) => field.id !== id);
    setInputFields(updatedInputFields);
  };

  return (
    <div className="px-[150px]">
      <div className="flex justify-center p-11">
        <h1 className="font-semibold text-4xl">
          Create your own service menu
        </h1>
      </div>


      <table className="gap-5">
        <tr>
          <th>Service Title </th>
          <th> Duration (min) </th>
          <th> Price (IQD)</th>
        </tr>
        {
          inputFields.map((inputField) => (
            <tr key={inputField.id} className="gap-5 ">
              <td className="">
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
                />
              </td>
              <td>
                <input
                  type="text"
                  placeholder=""
                  className="w-full h-[10px]  outline-none border-2 rounded-[40px] border-slate-200 placeholder:text-white text-base  pr-[45px] pl-[20px] py-[20px]"
                />
              </td>
              <td>
                <button className="bg-red-500 text-white px-4 py-2 rounded-full ml-5" onClick={() => deleteInputField(inputField.id)}>X</button>
              </td>
            </tr>
          ))
        }

      </table>
      <button onClick={addInputField} className="bg-blue-600 text-white px-4 py-2 rounded mt-5">+Add</button>
    </div>
  );
};
