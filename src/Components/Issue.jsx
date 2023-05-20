import React, { useState } from 'react';
import { TitleContext } from './TitleContext';
import { useContext } from 'react';
import Inputes from './Inputs';


export default function Issue() {
  const [title, setTitle] = useState(0);

  const tiles = [
    { title: "Urgent" },
    { title: "Typical" },
  ];
  
  const { updateSelectedTitle } = useContext(TitleContext);

  const handleClick = (title) => {
    setTitle(tiles[title].title);
    updateSelectedTitle(tiles[title].title);
  };

  return (
    <div className="bg-gray-900">
      <section className="p-10 mx-auto max-w-screen-xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1  sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            ISSUE
          </h1>
          {tiles.map((item, idx) => (
            <div
              className="flex divide-x-2 rounded text-gray-100"
              key={idx}
            >
              <button
                type="button"
                className={`${
                  title === idx
                    ? "px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700": "px-4 py-2 text-white bg-indigo-600 rounded-full duration-150 hover:bg-indigo-500 active:bg-indigo-700"
                }`}
                onClick={() => handleClick(idx)}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            alt="issue_image"
            className="w-full mx-auto sm:w-10/12 lg:w-full"
          />
        </div>
      </section>

      
    </div>
  );
}
