import React, { createContext, useState } from 'react';

export const TitleContext = createContext();

export const TitleProvider = ({ children }) => {
  const [selectedTitle, setSelectedTitle] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedProfile, setSelectedProfile] = useState('');

  const updateSelectedTitle = (title) => {
    setSelectedTitle(title);
  };

  const updateSelectedDepartment = (department) => {
    setSelectedDepartment(department);
  };

  const updateSelectedCompany = (src) => {
    setSelectedCompany(src);
  };

  const updateSelectedProfile = (src) => {
    setSelectedProfile(src);
  };

  return (
    <TitleContext.Provider
      value={{
        selectedTitle,
        selectedDepartment,
        selectedCompany,
        selectedProfile,
        updateSelectedTitle,
        updateSelectedDepartment,
        updateSelectedCompany,
        updateSelectedProfile,
      }}
    >
      {children}
    </TitleContext.Provider>
  );
};
