import React from "react";
import { Text, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { AlbumDTO } from "../../types";

import Album from "../Album";
import styles from "./styles";

interface AlbumCategoryProps {
  id: string;
  title: string;
  albums: AlbumDTO[];
}

const AlbumCategory: React.FC<AlbumCategoryProps> = (props) => {
  const { title, albums } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        data={albums}
        renderItem={({ item }) => <Album album={item} />}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default AlbumCategory;
