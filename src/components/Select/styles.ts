import { StyleSheet } from "react-native";
import { IRON } from "../../utils/colors";

const styles = StyleSheet.create({
  pickerSelectStyles: {
    fontSize: 16,
    fontFamily: "OverpassRegular",
    paddingRight: 30 // to ensure the text is never behind the icons
  },
  selectWrapper: {
    borderWidth: 1,
    borderColor: IRON,
    borderRadius: 8
  },
  loadingWrapper: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default styles;
