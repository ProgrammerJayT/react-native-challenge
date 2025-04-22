import React from "react";
import { Text, View } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { styles } from "./styles";

const PostsFlatListRenderComponent = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Entypo name="user" size={24} color="white" />
      </View>

      <Text style={{}}>{item.title}</Text>
      <Text style={{}}>{item.body}</Text>
    </View>
  );
};

export default PostsFlatListRenderComponent;
