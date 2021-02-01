import React, { useState, useRef, useEffect } from "react";
import {
  View,
  TextInput as NativeInput,
  Text,
  TouchableOpacity,
  TextInputProps as NativeInputProps
} from "react-native";
import styles from "./styles";
import { FormErrors } from "../../hoc/withFormErrorsHandler";
import { RED } from "../../utils/colors";

interface TextInputWithoutLabelProps extends NativeInputProps {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  inputRef?: any;
  errors?: FormErrors[];
  name?: string;
}

function TextInputWithoutLabel(props: TextInputWithoutLabelProps) {
  return (
    <View style={[styles.textInputWrapper]}>
      {props.iconLeft && <View style={styles.iconLeft}>{props.iconLeft}</View>}
      <View style={{ flex: 2 }}>
        <NativeInput
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

interface TextInputProps extends NativeInputProps {
  iconRight?: React.ReactNode;
  iconLeft?: React.ReactNode;
  label?: string;
  errors?: FormErrors[];
  name?: string;
  styledInputWrapper?: {};
  isEditing?: boolean;
}

/* This is a wrapper for inputs with floating labels */

function TextInputWithLabel(props: TextInputProps) {
  const [inputFocused, setInputFocus] = useState<boolean>(false);
  const inputEl = useRef(null);

  useEffect(() => {
    if (props.isEditing) setInputFocus(true);
  });

  const handleInputFocus = (): void => {
    setInputFocus(true);
    inputEl.current.focus();
  };

  const handleInputBlur = (): void => {
    if (
      inputEl.current &&
      !inputEl.current._lastNativeText &&
      String(props.value).length === 0
    ) {
      setInputFocus(false);
    }
  };

  return (
    <TouchableOpacity
      onPress={handleInputFocus}
      activeOpacity={1}
      style={{ flex: 2 }}
    >
      <TouchableOpacity
        onPress={handleInputFocus}
        style={[styles.labeWrapper, { top: inputFocused ? 8 : 18 }]}
      >
        <Text style={[styles.label, { fontSize: inputFocused ? 12 : 16 }]}>
          {props.label}
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flex: 2,
          marginTop: 18,
          display: inputFocused ? "flex" : "none"
        }}
      >
        <TextInputWithoutLabel
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
    <View style={[styles.inputContainer, props.styledInputWrapper]}>
      <View style={styles.inputWrapper}>
        {props.label ? (
          <TextInputWithLabel {...props} />
        ) : (
          <TextInputWithoutLabel {...props} />
        )}
      </View>
      {field && field[0] ? <Text style={{ color: RED }}>{field[0].errors}</Text> : <></>}
    </View>
  );
}
