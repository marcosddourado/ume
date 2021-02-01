import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  searchWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(20)
  },
  modalSearchHeader: {
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    elevation: 2,
    height: scale(90),
    backgroundColor: "#FFF",
    justifyContent: "flex-end"
  },
  modalSearchHeaderWrapper: {
    flexDirection: "row",
    alignItems: "center",
    paddingRight: scale(20)
  },
  modalSearchTextInput: {
    fontFamily: "OverpassLight",
    fontSize: scale(16),
    width: "80%",
    marginLeft: scale(20)
  }
});

export default styles;
