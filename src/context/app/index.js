import React, { createContext, useContext } from "react";
import { Dimensions } from "react-native";
import { constants } from "../../constants";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const deviceHeight = Dimensions.get("window").height;
  const deviceWidth = Dimensions.get("window").width;
  const COLORS = constants.COLORS;

  const value = {
    deviceHeight,
    deviceWidth,
    COLORS,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
