import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 30,
  },
  textContainer: {
    display: "flex",
    flexDirection: "row",
    marginVertical: 10,
  },
  name: {
    color: "white",
    marginTop: 20,
    fontSize: 28,
    fontWeight: "bold",
  },
  image: {
    width: 200,
    height: 200,
  },
  by: {
    color: "white",
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  likes: {
    textTransform: "uppercase",
    letterSpacing: 2,
    color: "white",
  },
  button: {
    backgroundColor: "#1cd05d",
    borderRadius: 50,
    marginBottom: 15,
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
    paddingHorizontal: 50,
    paddingVertical: 15,
    letterSpacing: 2,
  },
});

export default styles;
