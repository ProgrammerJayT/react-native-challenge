import React, { useEffect, useLayoutEffect } from "react";
import {
  Alert,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FlatListComponent from "../../components/flat-list";
import UsersFlatListRenderComponent from "../../components/flat-list/users";
import useReadUsers from "../../hooks/users";
import { useNavigation } from "@react-navigation/native";
import { useScreenHeaderContext } from "../../context/screen/header";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { useAppContext } from "../../context/app";

const UsersScreen = () => {
  const navigator = useNavigation();
  const { COLORS } = useAppContext();
  const { setRightButtons } = useScreenHeaderContext();
  const { data: users, isFetching: isReadUsersFetching } = useReadUsers({
    enabled: true,
  });

  useLayoutEffect(() => {}, [navigator]);

  const handlePostsClick = () => {
    navigator.navigate("Posts");
  };

  useEffect(() => {
    setRightButtons([
      {
        page: "Users",
        icon: (
          <MaterialCommunityIcons
            name="ballot-outline"
            size={24}
            color={COLORS.white}
          />
        ),
        title: "Posts",
        callBack: handlePostsClick,
      },
    ]);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatListComponent
        data={users}
        RenderComponent={UsersFlatListRenderComponent}
      />
    </SafeAreaView>
  );
};

export default UsersScreen;
