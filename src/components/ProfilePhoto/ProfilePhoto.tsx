import React from "react";
import {
  Text, ActivityIndicator, StyleSheet, TouchableOpacity
} from "react-native";
import { Image } from "react-native-elements";
import { Actions } from "react-native-router-flux";
import { scale } from "../../utils/scales";
import { UserBasicInfo } from "../../interfaces";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    flex: 1
  },
  userNameText: {
    fontFamily: "OverpassRegular",
    fontSize: scale(14),
    marginLeft: scale(12),
    marginTop: scale(2)
  }
});

interface Props {
  user: UserBasicInfo;
}

export default function ProfilePhoto({ user }: Props): JSX.Element {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => Actions.user_profile({ otherUser: user })}
    >
      <Image
        PlaceholderContent={<ActivityIndicator />}
        containerStyle={{
          width: scale(32),
          height: scale(32),
          borderRadius: scale(32) / 2,
          overflow: "hidden",
          marginLeft: scale(8)
        }}
        source={{ uri: user.avatar_url }}
      />
      <Text style={styles.userNameText}>{user.username}</Text>
    </TouchableOpacity>
  );
}
