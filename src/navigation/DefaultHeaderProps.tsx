import {
  StyleSheet,
  Platform,
  StatusBar
} from "react-native";
import { MAIN_COLOR } from "../utils/colors";
import { scale } from "../utils/scales";

export const NavStyles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    elevation: 2
  },
  defaultNavHeight: {
    height: 60
  },
  defaultTitle: {
    textTransform: "uppercase",
    fontFamily: "OverpassLight",
    fontSize: scale(14)
  },
  registersTitle: {
    fontFamily: "OverpassRegular",
    fontSize: scale(18),
    color: MAIN_COLOR
  },
  transparentHeader: {
    borderBottomWidth: 0
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});
