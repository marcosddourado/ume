import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
import { NavStyles } from "../../navigation/DefaultHeaderProps";
import { scale } from "../../utils/scales";
import { MAIN_COLOR } from "../../utils/colors";

const { height: windowHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  modalContainer: {
    alignItems: "center",
    flex: 1
  },
  header: {
    backgroundColor: "white",
    height: NavStyles.defaultNavHeight.height,
    marginTop: Constants.statusBarHeight,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  selectedComponent: {
    paddingHorizontal: 8.6,
    paddingVertical: 5,
    borderRadius: 50,
    position: "absolute",
    right: 3,
    bottom: 3,
    justifyContent: "center",
    backgroundColor: "#0580FF"
  },
  selectedNumberWrapper: {
    fontWeight: "bold",
    alignSelf: "center",
    padding: "auto",
    color: "#ffffff"
  },
  selectButtonWrapper: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    bottom: 0,
    paddingBottom: scale(10),
    backgroundColor: MAIN_COLOR
  },
  loader: {
    marginTop: windowHeight * 0.45
  }
});

export default styles;
