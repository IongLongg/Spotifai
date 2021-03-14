import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 7.5,
  },
  title: {
    color: "white",
    fontSize: 20,
  },
  artist: {
    color: "gray",
    fontSize: 15,
  },
  image: {
    width: 75,
    height: 75,
  },
  textContainer: {
    justifyContent: "space-evenly",
    marginLeft: 10,
  },
});

export default styles;
