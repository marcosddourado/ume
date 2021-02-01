import React from 'react';
import { KeyboardAvoidingView } from 'react-native';

const withKeyboardAvoidingView = (Component: React.ComponentType<any>) =>
  class WithKeyboardAvoidingView extends React.Component {
    render() {
      return (
        <KeyboardAvoidingView enabled behavior="position" style={{ flex: 1 }}>
          <Component />
        </KeyboardAvoidingView>
      );
    }
  };

export default withKeyboardAvoidingView;
