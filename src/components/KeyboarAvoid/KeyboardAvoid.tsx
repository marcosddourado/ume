import React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions
} from "react-native";

const { height: windowHeight } = Dimensions.get("window");
interface Props {
  children: React.ReactNode
}

export default function KeyboarAvoidWithoutScroll(props: Props): JSX.Element {
  return (
    <KeyboardAvoidingView
      enabled
      behavior={Platform.OS === "ios" ? "position" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? -windowHeight * 0.025 : windowHeight * 0.05}
      style={{ flex: 1 }}
    >
      <ScrollView>{props.children}</ScrollView>
    </KeyboardAvoidingView>
  );
}
