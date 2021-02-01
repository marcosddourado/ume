import { Dimensions, StyleSheet } from "react-native";
import {
 DODGER_BLUE,
 IRON,
 MAIN_COLOR,
 SHUTTLE_GRAY
} from "../../utils/colors";
import { scale } from "../../utils/scales";

const { height: windowHeight } = Dimensions.get("window");

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
  bigTitle: {
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
  userLineInfo: {
    justifyContent: "space-between",
    flexDirection: "row"
  },
  topInfo: {
    width: "100%",
    alignItems: "center",
    paddingBottom: scale(20)
  },
  limitWrapper: {
    borderColor: IRON,
    borderWidth: 1,
    borderRadius: 5,
    width: "100%",
    marginTop: windowHeight * 0.10,
    padding: scale(5)
  },
  limitLineTitle: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: scale(15)
  },
  limitLine: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: scale(5)
  },
  money: {
    color: "black",
    fontSize: scale(16),
    fontFamily: "OverpassBold"
  },
  graphWrapper: {
    width: "10%",
    justifyContent: "center",
    alignItems: "flex-end"
  },
  graph: {
    width: scale(15),
    backgroundColor: MAIN_COLOR
  },
  usedGraph: {
    width: "100%",
    backgroundColor: DODGER_BLUE
  }
});

export default styles;
