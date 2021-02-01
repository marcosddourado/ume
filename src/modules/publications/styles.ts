import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";
import {
  PORCELAIN,
  SHUTTLE_GRAY,
  OSLO_GRAY,
  BLACK_HAZE,
  DAINTREE
} from "../../utils/colors";

const styles = StyleSheet.create({
  publicationScrollWrapper: {
    backgroundColor: "#eee"
  },
  publicationScrollWrapperPost: {
    backgroundColor: "#FFF"
  },
  titleHint: {
    fontSize: scale(12),
    fontFamily: "OverpassItalic",
    fontStyle: "italic",
    fontWeight: "100",
    color: SHUTTLE_GRAY
  },
  newPublicationButtonWrapper: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
    backgroundColor: "#fff"
  },
  publicationContent: {
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
    marginBottom: scale(10),
    backgroundColor: "#fff"
  },
  newPublicationButton: {
    backgroundColor: PORCELAIN,
    flexDirection: "row",
    alignItems: "center",
    padding: scale(16),
    borderRadius: 5
  },
  newPublicationText: {
    fontFamily: "OverpassRegular",
    fontSize: scale(16),
    color: SHUTTLE_GRAY,
    marginLeft: scale(16),
    marginTop: scale(5)
  },
  postImageLarge: {
    width: "100%",
    borderRadius: 5,
    overflow: "hidden",
    marginTop: scale(10)
  },
  publicationActionsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  publicationLikesText: {
    color: OSLO_GRAY,
    fontSize: scale(14),
    marginLeft: scale(6)
  },
  publicationActions: {
    flexDirection: "row",
    alignItems: "center",
    padding: scale(20),
    paddingLeft: 0
  },
  shareWrapper: {
    alignItems: "center",
    padding: scale(20),
    paddingRight: 0
  },
  backgroundProfile: {
    width: scale(16),
    height: scale(16),
    overflow: "hidden",
    borderRadius: scale(16) / 2
  },
  backgroundProfilePost: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40) / 2
  },
  textUsername: {
    fontFamily: "OverpassBold",
    fontSize: scale(12),
    marginLeft: scale(10),
    color: "#000"
  },
  textUsernamePost: {
    marginLeft: 0
  },
  userImageWrapper: {
    flexDirection: "row",
    marginTop: scale(20)
  },
  userImageWrapperPost: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: scale(16),
    paddingVertical: scale(16),
    backgroundColor: "white"
  },
  commentPostWrapper: {
    backgroundColor: PORCELAIN,
    borderRadius: 5,
    padding: scale(10),
    marginLeft: scale(12)
  },
  commentTextWrapper: {
    marginLeft: scale(27)
  },
  commentInputWrapper: {
    flexDirection: "row",
    backgroundColor: BLACK_HAZE,
    padding: scale(12),
    borderRadius: 5,
    alignItems: "center"
  },
  commentInput: {
    marginLeft: scale(12),
    alignItems: "flex-start",
    fontFamily: "OverpassRegular",
    color: DAINTREE,
    fontSize: scale(14),
    width: "100%"
  },
  publicationText: {
    fontFamily: "OverpassLight",
    fontSize: scale(14)
  },
  publicationContentPost: {
    marginBottom: 0
  },
  title: {
    fontFamily: "OverpassBold",
    fontSize: scale(16)
  },
  formWrapper: {
    marginTop: scale(12)
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
  buttonFooter: {
    flex: 1,
    justifyContent: "flex-end",
    width: "100%",
    position: "absolute",
    bottom: 0
  },
  imageRegisterWrapper: {
    paddingHorizontal: scale(16)
  },
  modalButtonsContainer: {
    position: "absolute",
    top: scale(30),
    left: scale(15)
  },
  backWrapper: {
    backgroundColor: "rgba(80, 80, 80, 0.7)",
    width: scale(40),
    borderRadius: scale(40) / 2,
    aspectRatio: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2
  }
});

export default styles;
