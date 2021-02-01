import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";
import { scale } from "../../utils/scales";

interface ModalAlertProps {
  icon: React.ReactElement;
  title: string;
  text?: string;
  button?: React.ReactElement;
}

export default function ModalAlert(props: ModalAlertProps): JSX.Element {
  return (
    <View style={styles.modalWrapper}>
      <View style={{ alignItems: "center" }}>{props.icon}</View>
      <View style={{ alignItems: "center" }}>
        <Text style={styles.modalTitle}>{props.title}</Text>
        {props.text && <Text style={styles.modalText}>{props.text}</Text>}
      </View>
      <View style={{ paddingHorizontal: scale(40) }}>{props.button}</View>
    </View>
  );
}
