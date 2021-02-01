import React from "react";
import { Button, ButtonProps } from "react-native-elements";
import { MAIN_COLOR } from "../../utils/colors";

interface ButtonRadioProps extends ButtonProps {
  title: string;
  styledButtonStyle?: {};
}

export default function ButtonClear(props: ButtonRadioProps): JSX.Element {
  return (
    <Button
      type="clear"
      title={props.title}
      titleStyle={{
        fontFamily: "OverpassRegular",
        fontSize: 16,
        color: MAIN_COLOR
      }}
      buttonStyle={{
        borderRadius: 5,
        height: 56,
        ...props.styledButtonStyle
      }}
      {...props}
    />
  );
}
