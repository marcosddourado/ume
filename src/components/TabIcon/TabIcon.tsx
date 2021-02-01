import React from "react";
import { TabsProps } from "react-native-router-flux";
import { View } from "react-native";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { OSLO_GRAY } from "../../utils/colors";

interface TabIconProp extends TabsProps {
  focused: boolean;
  name: string;
  nameOutlined: string;
  size: number;
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
        {this.props.focused ? (
          <FishingTripIcon
            name={`${this.props.name}`}
            size={this.props.size}
            color={color}
          />
        ) : (
          <FishingTripIcon
            name={`${this.props.nameOutlined}`}
            size={this.props.size}
            color={color}
          />
        )}
      </View>
    );
  }
}
