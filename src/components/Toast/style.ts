import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 5,
    borderColor: "#CBD1D4",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  dotsWrapper: {
    backgroundColor: "rgba(80, 80, 80, 0.7)",
    width: scale(40),
    borderRadius: scale(40) / 2,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    zIndex: 1,
    top: 10,
    right: 10
  }
});

export default styles;
