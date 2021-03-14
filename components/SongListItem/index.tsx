import React from "react";
import { View, Image, Text } from "react-native";

import { SongDTO } from "../../types";
import styles from "./styles";

interface SongListItemProps {
  song: SongDTO;
}

const SongListItem: React.FC<SongListItemProps> = (props) => {
  const { imageUri, artist, id, title } = props.song;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: imageUri }} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

export default SongListItem;
