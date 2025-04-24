import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const UsersFlatListRenderComponent = ({ item }) => {
  const navigator = useNavigation();

  const handleViewUser = () => {
    navigator.navigate("User", { user: item });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={handleViewUser}>
      <Text style={[styles.name]}>{item.name}</Text>
    </TouchableOpacity>
  );
};

export default UsersFlatListRenderComponent;
