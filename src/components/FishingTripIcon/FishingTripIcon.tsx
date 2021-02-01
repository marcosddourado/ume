import React from "react";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import fontelloConfig from "../../../assets/fonts/selection.json";

interface FishingTripIconProps {
  name: string;
  size: number;
  color: string;
  style?: {};
}

const FontIcon = createIconSetFromIcoMoon(
  fontelloConfig,
  "fishingtrip",
  require("../../../assets/fonts/fishingtrip.ttf")
);

const FishingTripIcon = (props: FishingTripIconProps) => (
  <FontIcon
    style={props.style}
    name={props.name}
    size={props.size}
    color={props.color}
  />
);

export default FishingTripIcon;
