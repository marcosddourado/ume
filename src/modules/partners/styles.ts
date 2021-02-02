import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  container: {
    padding: scale(20)
  },
  title: {
    color: "black",
    fontFamily: "OverpassBold",
    fontSize: scale(16),
    marginVertical: scale(20)
  },
  bottomPadding: { height: scale(50) }
});

export default styles;
