import React, { useState, useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import styles from "./styles";
import { FormErrors } from "../../hoc/withFormErrorsHandler";
import { RED } from "../../utils/colors";

interface TextInputMaskedWithoutLabelProps extends TextInputMaskProps {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  inputRef?: any;
  errors?: FormErrors[];
  name?: string;
  styledInputWrapper?: {};
}

function TextInputMaskedWithoutLabel(props: TextInputMaskedWithoutLabelProps) {
  return (
    <View style={[styles.textInputWrapper]}>
      {props.iconLeft && <View style={styles.iconLeft}>{props.iconLeft}</View>}
      <View
        style={{
          flex: 2
        }}
      >
        <TextInputMask
          ref={props.inputRef}
          autoCapitalize="none"
          style={[!props.label ? styles.input : styles.inputLabed]}
          {...props}
        />
      </View>
      {props.iconRight && (
        <View
          style={[styles.iconRight, props.label ? styles.ajustIconAlign : {}]}
        >
          {props.iconRight}
        </View>
      )}
    </View>
  );
}

interface TextInputProps extends TextInputMaskedWithoutLabelProps {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  errors?: FormErrors[];
  name?: string;
  styledInputWrapper?: {};
}

/* This is a wrapper for inputs with floating labels */

function TextInputWithLabel(props: TextInputProps) {
  const [inputFocused, setInputFocus] = useState<boolean>(false);
  const inputEl = useRef(null);

  const handleInputFocus = (): void => {
    setInputFocus(true);
    if (inputEl.current && !props.iconRight) {
      inputEl.current._inputElement.focus();
    }
  };

  const handleInputBlur = (): void => {
    // if (
    //   inputEl.current &&
    //   !inputEl.current._inputElement._lastNativeText &&
    //   !props.iconRight
    // ) {
    //   setInputFocus(false);
    // }
  };

  return (
    <TouchableOpacity
      onPress={handleInputFocus}
      activeOpacity={1}
      style={{ flex: 2 }}
    >
      <TouchableOpacity
        onPress={handleInputFocus}
        style={[
          styles.labeWrapper,
          {
            top: inputFocused ? 8 : 18
          }
        ]}
      >
        <Text style={[styles.label, { fontSize: inputFocused ? 12 : 16 }]}>
          {props.label}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 2,
          marginTop: 16,
          display: inputFocused ? "flex" : "none"
        }}
      >
        <TextInputMaskedWithoutLabel
          {...props}
          inputRef={inputEl}
          label={props.label}
          onBlur={handleInputBlur}
        />
      </View>
    </TouchableOpacity>
  );
}

export default function TextInput(props: TextInputProps) {
  const field =
    props.errors !== undefined && props.errors.length > 0
      ? props.errors.filter((e: FormErrors) => e.path === props.name)
      : null;

  return (
    <View style={styles.inputContainer}>
      <View style={styles.inputWrapper}>
        {props.label ? (
          <TextInputWithLabel {...props} />
        ) : (
          <TextInputMaskedWithoutLabel {...props} />
        )}
      </View>
      {field && field[0] ? <Text style={{ color: RED }}>{field[0].errors}</Text> : <></>}
    </View>
  );
}
