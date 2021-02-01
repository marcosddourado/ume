import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";
import { IRON, NEVADA } from "../../utils/colors";

const styles = StyleSheet.create({
  inputContainer: {
    marginBottom: scale(16),
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: IRON,
    borderRadius: 5,
    height: scale(56),
    paddingTop: scale(0),
    paddingHorizontal: scale(16),
  },
  labeWrapper: {
    position: "absolute",
    left: 0,
    width: "100%",
  },
  label: {
    color: NEVADA,
    fontSize: 12,
    fontFamily: "OverpassRegular",
  },
  textInputWrapper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontFamily: "OverpassRegular",
    fontSize: 16,
    height: "100%",
  },
  inputLabed: {
    fontFamily: "OverpassRegular",
    fontSize: 16,
  },
  iconRight: {
    marginRight: scale(5),
  },
  iconLeft: {
    marginLeft: scale(5),
  },
  ajustIconAlign: {
    height: "100%",
  },
});

export default styles;
