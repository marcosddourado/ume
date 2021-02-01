import { StyleSheet } from "react-native";
import { scale } from "../../utils/scales";
import { OSLO_GRAY, SHUTTLE_GRAY } from "../../utils/colors";

const styles = StyleSheet.create({
  profileImage: {
    width: scale(40),
    height: scale(40),
    borderRadius: scale(40) / 2
  },
  profileWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: scale(32),
    marginBottom: scale(16),
    justifyContent: "space-between"
  },
  profileDataWrapper: {
    justifyContent: "center",
    marginLeft: scale(12)
  },
  profileNameText: {
    fontSize: scale(15)
  },
  profileTimeText: {
    marginLeft: scale(10),
    color: OSLO_GRAY,
    fontSize: scale(12)
  },
  profileNameWrapper: {
    flexDirection: "row",
    alignItems: "center"
  },
  profileLocationWrapper: {
    alignItems: "center",
    flexDirection: "row",
    marginTop: scale(3)
  },
  profileLocationText: {
    color: SHUTTLE_GRAY,
    fontSize: scale(12),
    marginLeft: scale(4)
  }
});

export default styles;
