import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import ScreenHeaderComponent from "../components/ui/screen/header";
import PostScreen from "../screens/post";
import PostsScreen from "../screens/posts";
import UserScreen from "../screens/user";
import UsersScreen from "../screens/users";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Users"
      screenOptions={({ navigation }) => ({
        header: (props) => <ScreenHeaderComponent navigation={props} />,
      })}
    >
      <Stack.Screen name="User" component={UserScreen} />
      <Stack.Screen name="Users" component={UsersScreen} />
      <Stack.Screen name="Post" component={PostScreen} />
      <Stack.Screen name="Posts" component={PostsScreen} />
    </Stack.Navigator>
  );
};

const Navigator = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
};

export default Navigator;
