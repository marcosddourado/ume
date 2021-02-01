import { StyleSheet } from "react-native";
import { SHUTTLE_GRAY } from "../../utils/colors";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    padding: scale(20)
  },
  profileImageContentStyle: {
    width: scale(67),
    height: scale(67),
    borderRadius: scale(67 / 2),
    overflow: "hidden",
    marginBottom: scale(10)
  },
  profileImageStyles: {
    width: scale(67),
    height: scale(67)
  },
  profileUserName: {
    fontFamily: "OverpassBold",
    fontSize: scale(16)
  },
  title: {
    color: "black",
    fontSize: scale(14),
    fontFamily: "OverpassBold"
  },
  content: {
    color: SHUTTLE_GRAY,
    fontSize: scale(14),
    fontFamily: "OverpassRegular"
  },
  userLineInfo: { justifyContent: "space-between", flexDirection: "row" }
});

export default styles;
