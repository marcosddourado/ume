import { StyleSheet } from "react-native";
import { IRON } from "../../utils/colors";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  suggestionWrapper: {
    padding: 6,
    borderWidth: 1,
    borderColor: IRON,
    marginBottom: 2,
    backgroundColor: "white",
    borderRadius: 5
  },
  userImage: {
    width: scale(20),
    height: scale(20),
    borderRadius: scale(10),
    marginRight: 6
  },
  userName: {
    fontFamily: "OverpassBold",
    fontSize: scale(12)
  }
});

export default styles;
