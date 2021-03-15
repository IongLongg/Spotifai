import React from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AlbumDTO } from "../../types";
import styles from "./styles";

interface Props {
  album: AlbumDTO;
}

const AlbumHeader: React.FC<Props> = (props) => {
  const { imageUri, name, numberOfLikes, by } = props.album;
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUri }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <View style={styles.textContainer}>
        <Text style={styles.by}>
          by {by}
          {` . `}
        </Text>

        <Text style={styles.likes}>{numberOfLikes} likes</Text>
      </View>
      <TouchableOpacity
        onPress={() => console.warn("Play")}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>PLAY</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AlbumHeader;
