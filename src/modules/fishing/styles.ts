import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    padding: scale(20),
    paddingBottom: 0
  },
  cardsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  title: {
    color: "black",
    fontSize: scale(14),
    fontFamily: "OverpassBold",
    paddingVertical: scale(20)
  }
});

export default styles;
