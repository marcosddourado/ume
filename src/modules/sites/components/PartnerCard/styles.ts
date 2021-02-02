import { StyleSheet } from "react-native";
import { MAIN_COLOR } from "../../../../utils/colors";
import { scale } from "../../../../utils/scales";

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    width: scale(110),
    marginRight: scale(20)
  },
  image: {
    width: scale(90),
    aspectRatio: 1
  },
  button: {
    borderColor: MAIN_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: scale(20),
    width: scale(110),
    alignItems: "center",
    justifyContent: "center",
    padding: scale(5)
  },
  text: {
    color: MAIN_COLOR,
    fontFamily: "OverpassBold",
    fontSize: scale(16)
  }
});

export default styles;
