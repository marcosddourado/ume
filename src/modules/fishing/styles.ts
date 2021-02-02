import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    padding: scale(20)
  },
  cardsWrapper: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
