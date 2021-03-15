import { AntDesign, FontAwesome } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { SongDTO } from "../../types";
import styles from "./styles";
import { Sound } from "expo-av/build/Audio";
import {
  AVPlaybackSource,
  AVPlaybackStatus,
  AVPlaybackStatusToSet,
  Playback,
} from "expo-av/build/AV";

interface Props {
  song: SongDTO;
}

const PlayerWidget: React.FC<Props> = (props) => {
  const { artist, imageUri, title } = props.song;
  const [sound, setSound] = useState<Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number | undefined>();
  const [position, setPosition] = useState<number | null>(null);

  const onPlaybackStatusUpdate = (status: AVPlaybackStatus) => {
    if (status.isLoaded) {
      setIsPlaying(status.isPlaying);
      setDuration(status.durationMillis);
      setPosition(status.positionMillis);
      console.log(status.durationMillis, status.positionMillis);
    }
  };

  const playSong = async () => {
    if (!!sound) {
      await sound.unloadAsync();
    }

    const { sound: currentSound } = await Sound.createAsync(
      { uri: "http://techslides.com/demos/sample-videos/small.mp4" },
      { shouldPlay: isPlaying },
      onPlaybackStatusUpdate
    );
    setSound(currentSound);
    setIsPlaying(true);
  };

  const onPlayPausePress = async () => {
    if (!sound) return;

    if (isPlaying) {
      await sound.stopAsync();
    } else {
      await sound.playAsync();
    }
  };

  const renderProgress = (): number => {
    if (!!duration && !!position) {
      return (position / duration) * 100;
    } else return 0;
  };

  // const getProgress = () => {
  //   if(!sound || !duration || )
  // }

  useEffect(() => {
    playSong();
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ ...styles.progressBar, width: `${renderProgress()}%` }} />
      <View style={styles.row}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <View style={styles.rightContainer}>
          <View style={styles.nameContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.artist}>{artist}</Text>
          </View>

          <View style={styles.iconsContainer}>
            <AntDesign name="hearto" size={30} color={"white"} />
            <TouchableOpacity>
              <FontAwesome
                name={isPlaying ? "pause" : "play"}
                size={30}
                color={"white"}
                onPress={onPlayPausePress}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PlayerWidget;
