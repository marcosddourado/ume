import React from "react";
import { Button, ButtonProps } from "react-native-elements";
import { MAIN_COLOR } from "../../utils/colors";
import { scale } from "../../utils/scales";

interface ButtonRadioProps extends ButtonProps {
  title: string;
  styledButtonStyle?: {};
}

export default function ButtonOutline(props: ButtonRadioProps): JSX.Element {
  return (
    <Button
      type="outline"
      title={props.title}
      titleStyle={{
        fontFamily: "OverpassRegular",
        fontSize: 16,
        color: MAIN_COLOR
      }}
      buttonStyle={{
        borderRadius: 5,
        height: 56,
        borderWidth: 1,
        borderColor: MAIN_COLOR,
        paddingHorizontal: scale(14),
        ...props.styledButtonStyle
      }}
      {...props}
    />
  );
}
