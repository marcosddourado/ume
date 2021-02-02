import React from "react";
import { TabsProps } from "react-native-router-flux";
import { View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { OSLO_GRAY } from "../../utils/colors";

interface TabIconProp extends TabsProps {
  focused: boolean;
  name: string;
  nameOutlined: string;
}

export default class TabIcon extends React.Component<TabIconProp, {}> {
  render() {
    let color = this.props.focused ? this.props.activeTintColor : OSLO_GRAY;

    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          alignItems: "center",
          alignSelf: "center",
          justifyContent: "center"
        }}
      >
        <MaterialCommunityIcons
          name={this.props.focused ? `${this.props.name}` : `${this.props.nameOutlined}`}
          size={22}
          color={color}
        />
      </View>
    );
  }
}
