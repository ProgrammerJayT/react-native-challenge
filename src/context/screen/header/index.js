import React, { createContext, useContext, useState } from "react";

const ScreenHeaderContext = createContext();

export const ScreenHeaderProvider = ({ children }) => {
  const [rightButtons, setRightButtons] = useState([]);

  const contextChildren = {
    rightButtons,
    setRightButtons,
  };

  return (
    <ScreenHeaderContext.Provider value={contextChildren}>
      {children}
    </ScreenHeaderContext.Provider>
  );
};

export const useScreenHeaderContext = () => useContext(ScreenHeaderContext);
