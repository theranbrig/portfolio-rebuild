import React, { useState } from 'react';

export const DarkContext = React.createContext();

const DarkProvider = props => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
      }}
    >
      {props.children}
    </DarkContext.Provider>
  );
};

export default DarkProvider;
