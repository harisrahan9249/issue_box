import React, { useContext, useState } from 'react';
import { TitleContext } from './TitleContext';

import Profile1 from './../Svgprofile/Profile1.svg';
import Profile2 from './../Svgprofile/Profile2.svg';
import Profile3 from './../Svgprofile/Profile3.svg';
import Profile4 from './../Svgprofile/Profile4.svg';
import Profile5 from './../Svgprofile/Profile5.svg';
import Profile6 from './../Svgprofile/Profile6.svg';
import Profile7 from './../Svgprofile/Profile7.svg';
import Profile8 from './../Svgprofile/Profile8.svg';
import Profile9 from './../Svgprofile/Profile9.svg';
import Profile10 from './../Svgprofile/Profile10.svg';

export default function Profile() {
  const { selectedProfile, updateSelectedProfile } = useContext(TitleContext);
  const colors = [
    {
      bg: Profile1,
      ring: "ring-[#2563EB]",
    },
    //  { bg: Profile2, ring: "ring-[#8B5CF6]" },
    //   { bg: Profile3, ring: "ring-[#DB2777]" },
    //   { bg: Profile4, ring: "ring-[#475569]" },
    //   { bg: Profile5, ring: "ring-[#EA580C]" },
    { bg: Profile6, ring: "ring-[#EA580C]" },
    { bg: Profile7, ring: "ring-[#EA580C]" },
    { bg: Profile8, ring: "ring-[#EA580C]" },
    { bg: Profile9, ring: "ring-[#EA580C]" },
    //   { bg: Profile10, ring: "ring-[#EA580C]" },
  ];
  const [selectedItem, setSelectedItem] = useState(0);

  const handleClick = (idx) => {
    setSelectedItem(idx);
    updateSelectedProfile(colors[idx].bg);
  };

  return (
    <div className="max-w-md mx-auto px-4">
      <h2 className="text-white font-medium text-center">Direct it whom?</h2>
      <ul className="mt-4 flex flex-wrap gap-4 items-start justify-center">
        {colors.map((item, idx) => (
          /* Color box */
          <li key={idx} className="flex-none">
            <label
              htmlFor={item.bg}
              className="block relative w-16 h-16 cursor-pointer"
              onClick={() => handleClick(idx)}
            >
              <input
                id={item.bg}
                type="radio"
                defaultChecked={idx === 1 ? true : false}
                name="color"
                className="sr-only peer"
              />
              <img
                src={item.bg}
                role="tab"
                aria-selected={selectedItem === idx}
                aria-controls={`tabpanel-${idx + 1}`}
                className={`inline-flex justify-center items-start w-full h-full rounded-full peer-checked:ring ring-offset-2 cursor-pointer duration-150 ${item.bg} ${item.ring}`}
                onClick={() => handleClick(idx)}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 text-white absolute inset-0 m-auto z-0 pointer-events-none hidden peer-checked:block duration-150"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 "

                />
              </svg>
            </label>
          </li>
        ))}
      </ul>
   </div>
  )
}