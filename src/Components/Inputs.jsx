import React, { useState, useContext } from 'react';
import { TitleContext } from './TitleContext';
import Datepicke from './Datepicke';

export default function Inputes() {
  const {
    selectedTitle,
    selectedDepartment,
    selectedCompany,
    selectedProfile,
  } = useContext(TitleContext);

  const [issue, setIssue] = useState('');
  const [department, setDepartment] = useState('');
  const [notes, setNotes] = useState('');

  const clearFields = () => {
    setIssue('');
    setDepartment('');
    setNotes('');
  };

  const handleSave = () => {
    clearFields();
    window.location.reload();
  };

  return (
    <>
      <div className="flex p-10 ml-20">
        <div className="max-w-md px-4 mx-auto mt-12">
          <div className="flex items-center text-gray-700 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
              Issue
            </div>
            <input
              type="text"
              placeholder={selectedTitle}
              value={issue}
              onChange={(e) => setIssue(e.target.value)}
              id="website-url"
              className="w-full p-2.5 ml-2 bg-transparent outline-none placeholder:text-white "
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
              Department
            </div>
            <input
              type="text"
              placeholder={selectedDepartment}
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              id="website-url"
              className="w-full p-2.5 ml-2 bg-transparent outline-none placeholder:text-white"
            />
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
              Company
            </div>
            <div className="flex items-center justify-center w-10 h-10 ml-2 bg-gray-200 rounded-full">
              {selectedCompany ? (
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={selectedCompany}
                  alt="Company Logo"
                />
              ) : null}
            </div>
          </div>
        </div>
        <div className="max-w-md px-4 mx-auto mt-12">
          <div className="flex items-center text-gray-400 border rounded-md">
            <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
              Profile
            </div>
            <div className="flex items-center justify-center w-10 h-10 ml-2 bg-gray-200 rounded-full">
              {selectedProfile ? (
                <img
                  className="w-full h-full object-contain rounded-full"
                  src={selectedProfile}
                  alt="Profile Image"
                />
              ) : null}
            </div>
          </div>
        </div>

          <div className="max-w-md px-4 mx-auto mt-12">
              <div className="flex items-center text-gray-400 border rounded-md">
                  <div className="px-3 py-2.5 rounded-l-md bg-gray-50 border-r">
                      Notes
                  </div>
                  <input
                      type="text"
                      placeholder=""
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      id="website-url"
                      className="w-full p-2.5 ml-2 bg-transparent outline-none text-white" />
              </div>
          </div>
          <div className="max-w-md px-4 mx-auto mt-12">
              <div className="flex items-center text-gray-400 border rounded-md">
                  
                  <input
                      id="file_input"
                      value=""
                      onChange={(e) => setDepartment(e.target.value)}
                      type="file"
                      className=" w-36 h-11 file:h-11 file:w-16 file:text-[15px] file:text-gray-600" 
                      />
              </div>
          </div>
      </div><Datepicke />
      <div className='max-w-screen-xl mx-auto flex justify-center items-center gap-x-3 overflow-x-auto text-sm p-5'>
            <button className='px-14 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg' onClick={handleSave}>delete</button>
            <button className='px-14 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg' onClick={handleSave}>save</button>
            <button className='px-14 py-1.5 text-sm text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg'>submit</button>
        </div>
      </>
  );
}
