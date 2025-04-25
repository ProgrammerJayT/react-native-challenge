import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useEffect } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { useAppContext } from "../../../../context/app";
import { getStyles } from "./styles";
import { useScreenHeaderContext } from "../../../../context/screen/header";

const ScreenHeaderComponent = ({ navigation }) => {
  const { rightButtons } = useScreenHeaderContext();
  const { deviceHeight, deviceWidth, COLORS } = useAppContext();
  const routeName = navigation.route.name;
  const styles = getStyles({ deviceHeight, deviceWidth, COLORS });

  const hasRightButtons = (rightButtons ?? []).some(
    (button) => button.page === routeName
  );

  useEffect(() => {
    //
  }, [navigation]);

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={{ display: "flex", flexDirection: "row" }}>
        {navigation?.back && (
          <TouchableOpacity
            onPress={() => navigation?.navigation.goBack()}
            style={{ marginRight: 5 }}
          >
            <Ionicons
              name="arrow-back-circle-outline"
              size={30}
              color={COLORS.white}
            />
          </TouchableOpacity>
        )}
        <Text style={{ fontSize: 30, color: COLORS.white }}>
          {navigation?.route?.name}
        </Text>

        <View style={{ flex: 1 }} />

        {hasRightButtons &&
          rightButtons.map((btn, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => btn?.callBack()}
              style={{ marginRight: 5 }}
            >
              {btn?.icon}
              <Text style={{ fontSize: 15, color: COLORS.white }}>
                {btn?.title}
              </Text>
            </TouchableOpacity>
          ))}
      </View>
    </SafeAreaView>
  );
};

export default ScreenHeaderComponent;
