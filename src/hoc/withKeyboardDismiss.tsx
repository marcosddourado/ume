import React from "react";
import { Keyboard, TouchableWithoutFeedback, View } from "react-native";

const withKeyboardDismiss = (Component: React.ComponentType<any>) => class WithKeyboardDismiss extends React.Component {
    render() {
      return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible>
          <View>
            <Component {...this.props} />
          </View>
        </TouchableWithoutFeedback>
      );
    }
  };

export default withKeyboardDismiss;
