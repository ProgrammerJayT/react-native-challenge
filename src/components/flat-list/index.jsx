import React from "react";
import { FlatList, View } from "react-native";
import { styles } from "./styles";

const FlatListComponent = ({ data, RenderComponent }) => {
  return (
    <View style={[styles.container]}>
      <FlatList
        data={data}
        renderItem={({ item }) => <RenderComponent item={item} />}
      />
    </View>
  );
};

export default FlatListComponent;
