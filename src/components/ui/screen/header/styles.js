import { StyleSheet } from "react-native";

export const getStyles = ({ deviceHeight, deviceWidth, COLORS }) => {
  return StyleSheet.create({
    container: {
      backgroundColor: COLORS.orange,
      height: deviceHeight * 0.15,
      justifyContent: "flex-end",
      padding:10
    },
  });
};
