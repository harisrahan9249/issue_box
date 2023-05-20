import React, { useState } from 'react';

function Action({ onClearFields }) {
  const [selectAction, setSelectAction] = useState(0);
  const btn_name = [{ name: 'Delete' }, { name: 'Save' }, { name: 'Submit' }];

  const handleSave = () => {
    if (onClearFields) {
      onClearFields();
    }
  };

  return (
    <div className="flex justify-center">
      <div className="inline-flex">
        <ul
          role="tablist"
          className="max-w-screen-xl mx-auto flex items-center gap-x-3 overflow-x-auto text-sm p-5"
        >
          {btn_name.map((item, idx) => (
            <li
              key={idx}
              className={`py-2 border-b-2 ${
                selectAction === idx
                  ? 'px-4 py-2 text-sm text-white bg-indigo-300 rounded-lg cursor-not-allowed'
                  : 'px-3 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg'
              }`}
            >
              <button
                key={idx}
                role="tab"
                aria-selected={selectAction === idx ? true : false}
                aria-controls={`tabpanel-${idx + 1}`}
                onClick={() => {
                  setSelectAction(idx);
                  if (idx === 1) {
                    handleSave();
                  }
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Action;
