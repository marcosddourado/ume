import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";
import { IRON } from "../../utils/colors";

const styles = StyleSheet.create({
  mentionInput: {
    borderWidth: 1,
    borderColor: IRON,
    borderRadius: 5,
    height: scale(150),
    padding: scale(16),
    marginBottom: scale(16),
    textAlignVertical: "top",
    fontFamily: "OverpassRegular",
    fontSize: 16
  }
});

export default styles;
