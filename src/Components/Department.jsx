import React, { useContext, useState } from 'react';
import { TitleContext } from './TitleContext';

export default function Department() {
  const { updateSelectedDepartment } = useContext(TitleContext);
  const tabItems = ["Administrative", "Finance", "Accounting", "Sales", "Marketing", "Logistic", "Human Resources", "Supplier", "Security"];
  const [selectedDepartment, setSelectedDepartment] = useState(tabItems[0]);

  const handleClick = (title) => {
    const selectedDepartment = tabItems[title];
    setSelectedDepartment(selectedDepartment);
    updateSelectedDepartment(selectedDepartment);
  };

  return (
    <div className="px-4 md:px-8 bg-gray-900 p-2 justify-center">
      <h1 className="text-white font-medium text-center">
        Relating to what Department
      </h1>
      <ul role="tablist" className="max-w-screen-xl mx-auto mr-11  flex items-center gap-x-3 overflow-x-auto text-sm p-16">
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedDepartment === item ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"
            }`}
          >
            <button
              role="tab"
              aria-selected={selectedDepartment === item}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2.5 px-4 rounded-lg duration-150 hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
              onClick={() => handleClick(idx)}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}
