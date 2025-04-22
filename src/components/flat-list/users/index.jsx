import React from "react";
import { Text, View } from "react-native";
import { styles } from "./styles";

const UsersFlatListRenderComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.name]}>{item.name}</Text>
    </View>
  );
};

export default UsersFlatListRenderComponent;
