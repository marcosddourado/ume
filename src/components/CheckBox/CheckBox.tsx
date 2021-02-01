import React, { useState } from "react";
import {
  CheckBox as NativeCheckBox,
  CheckBoxProps as NativeCheckBoxProps
} from "react-native-elements";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { DAINTREE, MAIN_COLOR, SHUTTLE_GRAY } from "../../utils/colors";
import { scale } from "../../utils/scales";

interface CheckBoxProps {
  label: any;
  isChecked?: boolean;
  getReturnedValue?: (value: boolean) => void;
  checkBoxProps?: NativeCheckBoxProps;
}

CheckBox.defaultProps = {
  getReturnedValue: () => {},
  isChecked: false
};

export default function CheckBox(props: CheckBoxProps): JSX.Element {
  const [checked, setChecked] = useState(props.isChecked);

  const handleCheckbox = (): void => {
    setChecked(!checked);
    props.getReturnedValue(!checked);
  };
  return (
    <NativeCheckBox
      onPress={handleCheckbox}
      containerStyle={{
        borderWidth: 0,
        backgroundColor: "transparent",
        padding: 0,
        marginLeft: 0,
        marginRight: 0
      }}
      textStyle={{
        fontFamily: "OverpassRegular",
        fontSize: scale(16),
        color: DAINTREE,
        paddingTop: 3
      }}
      checkedIcon={
        <FishingTripIcon name="icon-checked" size={16} color={MAIN_COLOR} />
      }
      uncheckedIcon={
        <FishingTripIcon name="icon-unchecked" size={16} color={SHUTTLE_GRAY} />
      }
      title={props.label}
      checked={checked}
    />
  );
}
