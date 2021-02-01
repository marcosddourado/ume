import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Dimensions
} from "react-native";

const { height: windowHeight } = Dimensions.get("window");

export default function KeyboardAvoid(props): JSX.Element {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "position" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -windowHeight * 0.025 : windowHeight * 0.05}
      style={{ flex: 1 }}
    >
      <>{props.children}</>
    </KeyboardAvoidingView>
  );
}
