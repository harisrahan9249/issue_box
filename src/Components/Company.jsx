import React, { useContext, useState } from 'react';
import { TitleContext } from './TitleContext';
import logo1 from './../Svg/log1.svg';
import logo2 from './../Svg/logo2.svg';
import logo3 from './../Svg/logo3.svg';
import logo4 from './../Svg/logo4.svg';
import logo5 from './../Svg/logo5.svg';
import logo6 from './../Svg/logo6.svg';
import logo7 from './../Svg/logo7.svg';
import logo8 from './../Svg/logo8.svg';
import logo9 from './../Svg/logo9.svg';
import logo10 from './../Svg/logo10.svg';
import logo11 from './../Svg/logo11.svg';

export default function Company() {
  const { selectedCompany, updateSelectedCompany } = useContext(TitleContext);
  const tabItems = [
    { svg: logo1 },
    { svg: logo2 },
    { svg: logo3 },
    { svg: logo4 },
    { svg: logo5 },
    { svg: logo6 },
    { svg: logo7 },
    { svg: logo8 },
    { svg: logo9 },
    { svg: logo10 },
    { svg: logo11 },
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (idx) => {
    setSelectedItem(idx);
    updateSelectedCompany(tabItems[idx].svg);
  };

  return (
    <div className="px-4 md:px-8 bg-gray-900 p-2">
      <h1 className="text-white font-medium text-center">Relating to which</h1>
      <ul role="tablist" className="max-w-screen-xl mx-auto flex items-center gap-x-3 overflow-x-auto text-sm p-20">
        {tabItems.map((item, idx) => (
          <li
            key={idx}
            className={`py-2 border-b-2 ${
              selectedItem === idx ? "border-indigo-600 text-indigo-600" : "border-none text-gray-500"
            }`}
          >
            <img
              src={item.svg}
              role="tab"
              aria-selected={selectedItem === idx}
              aria-controls={`tabpanel-${idx + 1}`}
              className="py-2.5 px-4 rounded-lg duration-150 hover:bg-gray-50 active:bg-gray-100 font-medium cursor-pointer"
              onClick={() => handleClick(idx)}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
