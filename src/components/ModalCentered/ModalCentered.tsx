import React from "react";
import Modal from "react-native-modalbox";
import {
  StyleProp, StyleSheet, View, ViewStyle
} from "react-native";
import { BlackPortal } from "react-native-portal";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  modal: {
    backgroundColor: "transparent",
    alignItems: "center",
    paddingHorizontal: scale(16)
  },
  childWrapper: {
    backgroundColor: "#FFF",
    width: "100%",
    height: "100%",
    borderRadius: 5,
    paddingHorizontal: scale(14),
    paddingVertical: scale(24)
  }
});

interface Props {
  isOpen: boolean;
  children: any;
  onClosed?(): void;
  modalStyle?: StyleProp<ViewStyle>;
  childWrapperStyle?: StyleProp<ViewStyle>;
}

export default function ModalCentered({
  isOpen,
  children,
  onClosed,
  modalStyle = {},
  childWrapperStyle = {}
}: Props) {
  return (
    <BlackPortal name="modal">
      <Modal
        style={[styles.modal, modalStyle]}
        position="center"
        isOpen={isOpen}
        swipeArea={50}
        useNativeDriver
        onClosed={onClosed}
      >
        <View style={[styles.childWrapper, childWrapperStyle]}>{children}</View>
      </Modal>
    </BlackPortal>
  );
}
