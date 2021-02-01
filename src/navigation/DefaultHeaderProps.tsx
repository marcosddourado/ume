import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Platform,
  StatusBar
} from "react-native";
import { Actions } from "react-native-router-flux";
import { MAIN_COLOR } from "../utils/colors";
import { scale } from "../utils/scales";
import FishingTripIcon from "../components/FishingTripIcon/FishingTripIcon";

export const NavStyles = StyleSheet.create({
  navBar: {
    borderBottomWidth: 0,
    shadowColor: "rgba(0, 0, 0, 0.2)",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.6,
    elevation: 2
  },
  defaultNavHeight: {
    height: 60
  },
  defaultTitle: {
    textTransform: "uppercase",
    fontFamily: "OverpassLight",
    fontSize: scale(14)
  },
  registersTitle: {
    fontFamily: "OverpassRegular",
    fontSize: scale(18),
    color: MAIN_COLOR
  },
  transparentHeader: {
    borderBottomWidth: 0
  },
  AndroidSafeArea: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  }
});

interface Props {
  to?: string;
  fromProps?: any;
}

export const BackButton = (props: Props) => (
  <TouchableOpacity
    activeOpacity={1}
    onPress={() => {
      props.to ?
        Actions.jump(props.to, props.fromProps || {}) :
        Actions.pop();
    }}
    style={{ paddingLeft: scale(20) }}
  >
    <FishingTripIcon name="icon-voltar" size={scale(18)} color={MAIN_COLOR} />
  </TouchableOpacity>
);
