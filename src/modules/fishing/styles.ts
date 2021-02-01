import { StyleSheet, Dimensions } from "react-native";
import { scale } from "../../utils/scales";
import {
  MAIN_COLOR, SHUTTLE_GRAY, OSLO_GRAY, IRON
} from "../../utils/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  customButtom: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: scale(5)
  },
  customButtomText: {
    fontFamily: "OverpassRegular",
    fontSize: scale(14),
    color: MAIN_COLOR,
    marginRight: scale(10)
  },
  cardsWrapper: {
    paddingHorizontal: scale(16),
    paddingBottom: 0,
    minHeight: height * 0.68
  },
  modalTitle: {
    fontSize: scale(14),
    color: SHUTTLE_GRAY,
    alignSelf: "center",
    marginBottom: scale(30)
  },
  filtersWrapper: {
    marginVertical: scale(10)
  },
  modalSubTitle: {
    fontSize: scale(16),
    fontFamily: "OverpassBold"
  },
  modalWrapper: {
    flex: 1,
    paddingHorizontal: scale(20),
    width: "100%"
  },
  modalStyles: {
    height: scale(300)
  },
  buttonConfirmWrapper: {
    width: "100%"
  },
  iconMargin: {
    marginHorizontal: scale(6)
  },
  filterWrapper: {
    flexDirection: "row",
    paddingRight: scale(16),
    paddingTop: scale(10),
    paddingBottom: scale(20)
  },
  filterTitleText: {
    fontFamily: "OverpassRegular",
    fontSize: scale(14),
    color: OSLO_GRAY,
    marginTop: scale(24)
  },
  buttonAddFighingWrapper: {
    position: "absolute",
    zIndex: 9,
    elevation: 10,
    bottom: scale(40),
    right: scale(15)
  },
  buttonAddFighing: {
    paddingRight: scale(15)
  },
  buttonAddIcon: {
    marginHorizontal: scale(8)
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
  container: {
    paddingHorizontal: scale(16),
    flex: 0,
    height: "100%",
    paddingBottom: scale(130),
    position: "relative"
  },
  content: {
    paddingTop: scale(25)
  },
  formWrapper: {
    marginTop: scale(12)
  },
  radioWrapper: {
    marginBottom: scale(16)
  },
  buttonFooter: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  titleHint: {
    fontSize: scale(12),
    fontFamily: "OverpassItalic",
    fontStyle: "italic",
    fontWeight: "100",
    color: SHUTTLE_GRAY
  },
  forpublicWrapper: {
    borderTopWidth: 1,
    borderTopColor: "#EDF1F2",
    marginTop: scale(29),
    paddingVertical: scale(40)
  },
  forpublicTextWrapper: {
    paddingRight: scale(20),
    flex: 1
  },
  forpublicText: {
    fontSize: scale(14),
    color: "#596266"
  },
  selectWrapper: {
    borderWidth: 1,
    borderColor: IRON,
    borderRadius: 8,
    marginBottom: scale(15)
  },
  autocompleteContainer: {
    flex: 1,
    backgroundColor: "red"
  },
  itemText: {
    fontSize: 16,
    margin: 5,
    fontFamily: "OverpassRegular"
  },
  inputContainerStyle: {
    marginVertical: scale(6),
    borderWidth: 1,
    borderRadius: 5,
    borderColor: IRON,
    padding: 5,
    paddingLeft: 15,
    color: "red"
  },
  listStyle: {
    zIndex: 1,
    position: "absolute",
    borderColor: IRON,
    borderWidth: 1,
    borderRadius: 8
  }
});

export default styles;
