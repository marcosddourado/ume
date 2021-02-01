import React from "react";
import { View } from "react-native";

interface CustomRadioProps {
  checked: any;
  keyname: string;
  wrapperStyle?: {};
  radioWrapperStyles?: {};
  clearSelection?: boolean;
  renderComponent: (param: {
    name: string;
    value: string | number;
    handleValues: Function;
    isSelected: boolean;
  }) => React.ReactNode;
  items: {
    name: string;
    value: string | number;
  }[];
  getValuesWithKeyName: (param: {
    [keyname: string]: {
      value: string[];
      name: string;
    };
  }) => void;
}

CustomRadio.defaultProps = {
  checked: []
};

export default function CustomRadio(props: CustomRadioProps): JSX.Element {
  const [values, setValues] = React.useState([]);

  const _handleValues = (value, name) => {
    setValues(value === props.checked ? [] : [value]);

    props.getValuesWithKeyName({
      [props.keyname]: {
        value: value === props.checked ? [] : [value],
        name: name
      }
    });
  };

  React.useEffect(() => {
    if (props.clearSelection && values.length) {
      setValues([]);
    }
  }, [props.clearSelection]);

  return (
    <View style={props.wrapperStyle}>
      {props.items.map((item, i) => {
        return (
          <View key={`component_key_${i}`} style={props.radioWrapperStyles}>
            {props.renderComponent({
              name: item.name,
              value: item.value,
              handleValues: () => _handleValues(item.value, item.name),
              isSelected: item.value === props.checked
            })}
          </View>
        );
      })}
    </View>
  );
}
