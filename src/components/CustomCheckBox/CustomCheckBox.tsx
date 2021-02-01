import React from 'react';
import { View, Button } from 'react-native';

interface CustomCheckBoxProps {
  checked: any[];
  keyname: string;
  items: {
    name: string;
    value: string;
  }[];
  getValuesWithKeyName: (param: { [keyname: string]: string[] }) => void;
}

export default function CustomCheckBox(props: CustomCheckBoxProps) {
  const [values, setValues] = React.useState([]);

  const handleValues = value => {
    const result =
      values.indexOf(value) === -1
        ? values.concat(value)
        : values.filter(v => v !== value);

    setValues(result);
    props.getValuesWithKeyName({
      [props.keyname]: result
    });
  };

  return (
    <View>
      {props.items.map(i => (
        <View
          style={props.checked.indexOf(i.value) > -1 ? { borderWidth: 1 } : {}}
        >
          <Button title={i.name} onPress={() => handleValues(i.value)} />
        </View>
      ))}
    </View>
  );
}
