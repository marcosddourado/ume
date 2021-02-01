import { StyleSheet } from "react-native";
import Constants from "expo-constants";
import { scale } from "../../utils/scales";
import {
  SHUTTLE_GRAY,
  BLACK,
  MAIN_COLOR,
  OSLO_GRAY,
  IRON
} from "../../utils/colors";

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(16)
  },
  iconMargin: {
    marginHorizontal: scale(6)
  },
  filterWrapper: {
    flexDirection: "row",
    paddingTop: scale(10),
    paddingBottom: scale(20)
  },
  headerBackButton: {
    width: scale(40),
    height: scale(40),
    backgroundColor: "rgba(80, 80, 80, 0.7)",
    borderRadius: scale(40) / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: Constants.statusBarHeight + scale(20),
    left: scale(20),
    zIndex: 30
  },
  filterTitleText: {
    fontFamily: "OverpassRegular",
    fontSize: scale(14),
    color: OSLO_GRAY,
    marginLeft: scale(16),
    marginTop: scale(24)
  },
  modalStyles: {
    height: scale(400)
  },
  modalWrapper: {
    flex: 1,
    paddingHorizontal: scale(20),
    width: "100%"
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
  selectWrapper: {
    borderWidth: 1,
    borderColor: IRON,
    borderRadius: 8,
    marginBottom: scale(15)
  },
  buttonConfirmWrapper: {
    width: "100%"
  },
  addRegisterIcon: {
    marginLeft: scale(5),
    marginRight: scale(12)
  },
  siteWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(20)
  },
  siteTitle: {
    fontFamily: "OverpassBold",
    fontSize: scale(24)
  },
  siteId: {
    fontFamily: "OverpassRegular",
    fontSize: scale(16),
    color: BLACK
  },
  siteRateWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  siteRateNumber: {
    fontFamily: "OverpassRegular",
    fontSize: scale(16),
    marginRight: scale(8),
    marginLeft: scale(5),
    paddingTop: 4
  },
  siteTextDescriptionWrapper: {
    marginVertical: scale(16)
  },
  siteTextDescription: {
    fontFamily: "OverpassRegular",
    fontSize: scale(14)
  },
  siteData: {
    color: MAIN_COLOR,
    paddingLeft: scale(30)
  },
  siteDataWrapper: {
    marginBottom: scale(25),
    flexDirection: "row",
    alignItems: "center",
    position: "relative"
  },
  rateSiteText: {
    fontFamily: "OverpassBold",
    fontSize: scale(16),
    marginBottom: scale(13)
  }
});

export default styles;
