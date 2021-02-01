import React from "react";
import { Button, ButtonProps } from "react-native-elements";
import { StyleSheet } from "react-native";
import { MAIN_COLOR, SHUTTLE_GRAY, MYSTIC } from "../../utils/colors";

interface ButtonRadioProps extends ButtonProps {
  title: string;
  active: boolean;
}

ButtonRadio.defaultProps = {
  active: false
};

const styles = StyleSheet.create({
  titleUnactive: {
    fontFamily: "OverpassRegular",
    fontSize: 14,
    paddingTop: 0,
    paddingBottom: 0,
    color: SHUTTLE_GRAY
  },
  buttonUnactive: {
    borderRadius: 4,
    height: 34,
    padding: 0,
    borderWidth: 1,
    borderColor: MYSTIC,
    alignItems: "center"
  },
  titleActive: {
    color: MAIN_COLOR
  },
  buttonActive: {
    borderColor: MAIN_COLOR,
    backgroundColor: "rgba(0, 171, 242, 0.1)"
  }
});
export default function ButtonRadio(props: ButtonRadioProps): JSX.Element {
  return (
    <Button
      type="outline"
      title={props.title}
      titleStyle={[
        styles.titleUnactive,
        props.active ? styles.titleActive : {}
      ]}
      buttonStyle={[
        styles.buttonUnactive,
        props.active ? styles.buttonActive : {}
      ]}
      {...props}
    />
  );
}
