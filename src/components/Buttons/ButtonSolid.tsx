import React from "react";
import { Button, ButtonProps } from "react-native-elements";
import { MAIN_COLOR, DISABLED_TEXT_COLOR } from "../../utils/colors";

interface ButtonSolidProps extends ButtonProps {
  title: string;
  flat?: boolean;
  styledButtonStyle?: {};
}

export default function ButtonSolid(props: ButtonSolidProps): JSX.Element {
  return (
    <Button
      title={props.title}
      titleStyle={{
        fontFamily: "OverpassRegular",
        fontSize: 16
      }}
      disabledTitleStyle={{ color: DISABLED_TEXT_COLOR }}
      buttonStyle={{
        borderRadius: props.flat ? 0 : 5,
        height: props.flat ? 72 : 56,
        backgroundColor: MAIN_COLOR,
        ...props.styledButtonStyle
      }}
      {...props}
    />
  );
}
