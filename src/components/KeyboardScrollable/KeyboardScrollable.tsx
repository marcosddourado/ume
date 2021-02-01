import React from "react";
import { ScrollView } from "react-native";

class KeyboardScrollable extends React.Component {
  render() {
    return (
      <ScrollView
        contentContainerStyle={{
          flex: 0,
          alignItems: "stretch",
          minHeight: "100%"
        }}
        keyboardDismissMode="on-drag"
      >
        {this.props.children}
      </ScrollView>
    );
  }
}

export default KeyboardScrollable;
