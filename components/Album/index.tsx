import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Image, TouchableWithoutFeedback } from "react-native";

import { AlbumDTO } from "../../types";

import styles from "./styles";

interface AlbumProps {
  album: AlbumDTO;
}

const Album: React.FC<AlbumProps> = (props) => {
  const { artistsHeadline, imageUri } = props.album;
  const navigation = useNavigation();

  const handleOnPress = () => {
    navigation.navigate("AlbumsScreen", { id: props.album.id });
  };

  return (
    <TouchableWithoutFeedback onPress={handleOnPress}>
      <View style={styles.container}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <Text style={styles.text}>{artistsHeadline}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Album;
