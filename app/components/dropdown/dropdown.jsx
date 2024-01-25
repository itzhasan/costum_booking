import React, { useState } from 'react';
import countaries from '@/app/data/createCostume/countaries';

const Dropdown = () => {
    const [selectedCountary,setSelectedCountary]=useState('Select countary');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    // Handle the selected option
    console.log(`Selected: ${option}`);
    setSelectedCountary(option)
    // You can perform further actions based on the selected option
    // For example, close the dropdown or navigate to a different page
    setIsDropdownOpen(false);
  };


  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center w-full p-4 text-sm font-medium  border-2 rounded-md  focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75"
      >
        {selectedCountary}
      </button>

      {isDropdownOpen && (
        <div className="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none">
          <div className="py-1">
            {countaries.map((option,index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(option.label)}
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
