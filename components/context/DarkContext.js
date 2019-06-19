import React, { useState } from 'react';
import PropTypes from 'prop-types';

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

DarkProvider.propTypes = {
  children: PropTypes.object.isRequired,
};

export default DarkProvider;
