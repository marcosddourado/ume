import { Platform, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: scale(80),
    backgroundColor: "transparent",
    paddingTop: Platform.OS === "ios" ? Constants.statusBarHeight : 0
  },
  indicatorWrapper: {
    position: "absolute",
    width: "100%",
    height: scale(70),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    top: Platform.OS === "ios" ? Constants.statusBarHeight : 0
  },
  indicatorText: {
    color: "white",
    fontFamily: "OverpassRegular",
    fontSize: scale(14)
  },
  backWrapper: {
    backgroundColor: "rgba(80, 80, 80, 0.7)",
    width: scale(40),
    borderRadius: scale(40) / 2,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: scale(15),
    marginLeft: scale(15)
  }
});

export default styles;
