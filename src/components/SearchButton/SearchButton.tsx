import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { MAIN_COLOR } from "../../utils/colors";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  buttonWrapper: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: scale(17),
    marginTop: scale(10)
  },
  textSearch: {
    color: MAIN_COLOR,
    fontFamily: "OverpassLight",
    fontSize: scale(10),
    marginTop: scale(3)
  }
});

export default function SearchButton(props): JSX.Element {
  return (
    <TouchableOpacity onPress={props.onPress} style={styles.buttonWrapper}>
      <FishingTripIcon name="icon-search" size={20} color="#001F2C" />
      <Text style={styles.textSearch}>Buscar</Text>
    </TouchableOpacity>
  );
}