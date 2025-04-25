import React, { use, useCallback, useState } from "react";
import {
  RefreshControl,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

const UserScreen = ({ route }) => {
  const { user } = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const navigator = useNavigation()

  console.log("User", user);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 3000);
  }, []);

  const additionalInfo = ["username"];

  return (
    <SafeAreaView style={[styles.container]}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={{ alignItems: "center", flex: 1 }}>
          <Entypo name="user" size={100} color="black" />
          <Text style={[styles.nameText]}>{user?.name}</Text>
          <Text style={[styles.nameText]}>{user?.surname}</Text>

          <View style={{ marginBottom: 50 }} />

          <Text style={[styles.additionalInfo]}>Email: {user?.email}</Text>
          <Text style={[styles.additionalInfo]}>
            Address: {`${user?.address}`}
          </Text>
        </View>

        <View style={[styles.seePostsButtonContainer]}>
          <TouchableOpacity style={[styles.seePostsButton]} onPress={()=>navigator.navigate('Posts')}>
            <Text style={[styles.seePostsButtonText]}>User Posts</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserScreen;
