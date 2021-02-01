import React from "react";
import { Button, ButtonProps } from "react-native-elements";
import { scale } from "../../utils/scales";

interface ButtonCustomProps extends ButtonProps {
  title: string;
  flat?: boolean;
  fontSize?: number;
  bgColor?: string;
  height?: number;
  textColor?: string;
  buttonStyles?: {};
}

export default function ButtonCustom(props: ButtonCustomProps): JSX.Element {
  return (
    <Button
      title={props.title}
      titleStyle={{
        fontFamily: "OverpassRegular",
        fontSize: props.fontSize,
        color: props.textColor,
        paddingTop: 4,
        paddingBottom: 0
      }}
      containerStyle={{}}
      buttonStyle={{
        paddingHorizontal: scale(10),
        borderRadius: props.flat ? 0 : 5,
        alignItems: "center",
        backgroundColor: props.bgColor,
        padding: 0,
        height: props.height,
        ...props.buttonStyles
      }}
      {...props}
    />
  );
}
