import React from "react";
import Modal from "react-native-modalbox";
import { StyleSheet, View } from "react-native";
import { BlackPortal } from "react-native-portal";
import { scale } from "../../utils/scales";

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: scale(50),
    flex: 1
  },

  modal: {
    // justifyContent: 'center',
    alignItems: "center"
  }
});

export default function BottomHalfModal({
  isOpen,
  children,
  onClosed,
  modalStyle = {},
  hasDrag = false
}) {
  return (
    <BlackPortal name="modal">
      <Modal
        style={[styles.modal, modalStyle]}
        position="bottom"
        isOpen={isOpen}
        swipeArea={50}
        useNativeDriver
        onClosed={onClosed}
      >
        {hasDrag && (
          <View
            style={{
              width: scale(32),
              height: scale(4),
              backgroundColor: "#E2E8EB",
              marginTop: scale(10),
              marginBottom: scale(30)
            }}
          />
        )}
        {children}
      </Modal>
    </BlackPortal>
  );
}
