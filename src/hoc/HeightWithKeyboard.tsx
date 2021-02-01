import React from 'react';
import { StyleSheet, SafeAreaView, Platform } from 'react-native';
import { scale } from '../utils/scales';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { KeyboardAvoidingView } from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderWidth: 1
  }
});

const HeightWithKeyboard = ({ children, styleInline }) => {
  return (
    <KeyboardAvoidingView
      style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
      }}
      behavior={'position'}
      contentContainerStyle={[styles.wrapper, styleInline]}
    >
      <SafeAreaView style={{ borderWidth: 1 }}>{children}</SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default HeightWithKeyboard;
