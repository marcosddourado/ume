import { StyleSheet } from "react-native";
import { IRON, SHUTTLE_GRAY } from "../../../../utils/colors";
import { scale } from "../../../../utils/scales";

const styles = StyleSheet.create({
  wrapper: {
    borderColor: IRON,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    padding: scale(10),
    marginBottom: scale(20)
  },
  title: {
    color: "black",
    fontSize: scale(16),
    fontFamily: "OverpassBold",
    marginBottom: scale(10)
  },
  lineWrapper: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  subtitle: {
    color: SHUTTLE_GRAY,
    fontSize: scale(14),
    fontFamily: "OverpassRegular"
  },
  value: {
    color: "black",
    fontSize: scale(14),
    fontFamily: "OverpassBold"
  }
});

export default styles;
