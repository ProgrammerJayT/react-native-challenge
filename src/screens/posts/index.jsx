import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import FlatListComponent from "../../components/flat-list";
import PostsFlatListRenderComponent from "../../components/flat-list/posts";
import useReadPosts from "../../hooks/posts";

const PostsScreen = () => {
  const { data: posts, isFetching:isReadPostsFetching } = useReadPosts({ enabled: true });

  useEffect(() => {
    // on mounted
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatListComponent
        data={posts}
        RenderComponent={PostsFlatListRenderComponent}
      />
    </SafeAreaView>
  );
};

export default PostsScreen;
