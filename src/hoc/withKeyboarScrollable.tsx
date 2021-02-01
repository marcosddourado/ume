import React from "react";
import { ScrollView } from "react-native";

const withKeyboarScrollable = (Component: React.ComponentType<any>) =>
  class WithKeyboardDismiss extends React.Component<any,any> {
    render() {
      return (
        <ScrollView
          contentContainerStyle={{
            flex: 0,
            alignItems: "stretch"
          }}
          keyboardDismissMode="on-drag"
        >
          <Component {...this.props} />
        </ScrollView>
      );
    }
  };

export default withKeyboarScrollable;
