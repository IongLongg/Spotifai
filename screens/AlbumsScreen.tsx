import { useRoute } from "@react-navigation/core";
import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import SongListItem from "../components/SongListItem";

import albumDetail from "../data/albumDetails";

const AlbumsScreen = () => {
  const route = useRoute();
  useEffect(() => {
    console.log(route);
  }, []);

  return (
    <View>
      <Text style={{ color: "white" }}>Album screen</Text>
      <FlatList
        data={albumDetail.songs}
        renderItem={({ item }) => <SongListItem song={item} />}
      />
    </View>
  );
};

export default AlbumsScreen;
