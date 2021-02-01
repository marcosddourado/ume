import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import { MAIN_COLOR } from "../../utils/colors";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { scale } from "../../utils/scales";
import styles from "./styles";

interface ModalActionsProps {
  buttons: {
    iconName: string;
    text: string;
    onPress: () => void;
  }[];
}
export default function ModalActions(props: ModalActionsProps): JSX.Element {
  return (
    <View style={styles.modalActionWrapper}>
      {props.buttons.map((button, i) => {
        if (!button) return <></>;
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={button.onPress}
            style={styles.modalActionButton}
            key={`button_modal_action_${i}`}
          >
            {button.iconName === "icon-share" ?
              <EvilIcons name="share-google" size={scale(30)} color={MAIN_COLOR} /> :
              <FishingTripIcon
                name={button.iconName}
                size={scale(20)}
                color={MAIN_COLOR}
              />}
            <Text style={styles.modalActionText}>{button.text}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
