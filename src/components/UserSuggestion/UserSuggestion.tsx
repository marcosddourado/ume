import React from "react";
import {
  TouchableOpacity, Image, View, Text, GestureResponderEvent
} from "react-native";
import styles from "./styles";

interface Props {
  name: string;
  avatar: string;
  onPress?: (event: GestureResponderEvent) => void;
}

export default function UserSuggestion({ name, avatar, onPress }: Props): JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.suggestionWrapper}
    >
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.userImage} source={{ uri: avatar }} />
        <Text style={styles.userName}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
}
