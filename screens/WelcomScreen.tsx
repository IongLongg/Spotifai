import React from "react";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Album from "../components/Album";
import AlbumCategory from "../components/AlbumCategory";

import { Text, View } from "../components/Themed";
import albumsCategory from "../data/albumsCategory";

const album = {
  id: "11",
  imageUri:
    "https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg",
  artistsHeadline: "Taylor Swift, Kygo Objective C, Avicii",
};

const WelcomScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={albumsCategory}
        renderItem={({ item }) => (
          <AlbumCategory
            key={item.id}
            id={item.id}
            title={item.title}
            albums={item.albums}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
});

export default WelcomScreen;
