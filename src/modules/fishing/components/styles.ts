import { StyleSheet } from "react-native";
import { scale } from "../../../utils/scales";

const styles = StyleSheet.create({
  wrapper: {
    width: "30%",
    borderRadius: 5,
    borderWidth: 1.5,
    padding: scale(10)
  },
  title: {
    color: "black",
    fontSize: scale(14),
    fontFamily: "OverpassBold"
  },
  price: {
    color: "black",
    fontSize: scale(16),
    fontFamily: "OverpassBold"
  }
});

export default styles;
