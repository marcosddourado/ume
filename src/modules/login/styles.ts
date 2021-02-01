import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";
import { MYSTIC, SHUTTLE_GRAY } from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16),
    height: "100%"
  },
  title: {
    fontFamily: "OverpassBold",
    fontSize: scale(16)
  },
  titleBig: {
    fontSize: scale(24),
    fontFamily: "OverpassBold",
    marginBottom: scale(15)
  },
  logoWrapper: {
    alignItems: "center",
    paddingVertical: 20
  },
  content: {
    paddingTop: scale(25),
    flexDirection: "column",
    justifyContent: "space-between",
    flex: 1,
    maxHeight: scale(600),
    paddingBottom: 10
  },
  formWrapper: {
    marginTop: scale(12)
  },
  buttonsWrapper: {
    paddingBottom: scale(15)
  },
  buttonsLinedDiv: {
    borderBottomWidth: 1,
    borderBottomColor: MYSTIC,
    marginBottom: scale(30),
    marginTop: scale(15)
  },
  textWarning: {
    fontSize: scale(12),
    fontFamily: "OverpassRegular",
    color: SHUTTLE_GRAY,
    paddingHorizontal: scale(25)
  },
  buttonFooter: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: scale(20)
  }
});

export default styles;
