import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import FlatListComponent from "../../components/flat-list";
import UsersFlatListRenderComponent from "../../components/flat-list/users";
import useReadUsers from "../../hooks/users";

const UsersScreen = () => {
  const { data: users, isFetching:isReadUsersFetching } = useReadUsers({ enabled: true });

  useEffect(() => {
    // on mounted
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
