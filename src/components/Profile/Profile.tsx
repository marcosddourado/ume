import React from "react";
import {
  View, Image, Text, TouchableOpacity
} from "react-native";
import { useSelector } from "react-redux";
import { Actions } from "react-native-router-flux";
import styles from "./styles";
import FishingTripIcon from "../FishingTripIcon/FishingTripIcon";
import { scale } from "../../utils/scales";
import { OSLO_GRAY, BLACK } from "../../utils/colors";
import { userSelector } from "../../state/reducers/userReducer";

export default function Profile(props: any): JSX.Element {
  const loggedUser = useSelector((state) => ({ user: userSelector(state) || {} })).user;

  return (
    <View style={styles.profileWrapper}>
      <TouchableOpacity
        onPress={() => (props.userInfo.id === loggedUser.id
          ? Actions.profile()
          : Actions.user_profile({ otherUser: props.userInfo }))}
        style={{ flexDirection: "row" }}
      >
        <Image style={styles.profileImage} source={{ uri: props.userInfo.avatar_url }} />
        <View style={styles.profileDataWrapper}>
          <View style={styles.profileNameWrapper}>
            <Text style={styles.profileNameText}>{props.userInfo.name}</Text>
            <Text style={styles.profileTimeText}>{props.time}</Text>
          </View>
          {props.location ? (
            <View style={styles.profileLocationWrapper}>
              <FishingTripIcon
                name="icon-location"
                size={scale(12)}
                color={OSLO_GRAY}
              />
              <Text style={styles.profileLocationText}>{props.location}</Text>
            </View>
          ) : (
            <></>
          )}
        </View>
      </TouchableOpacity>

      {props.userCanEdit && (
        <TouchableOpacity
          style={{ width: scale(40), alignItems: "flex-end" }}
          onPress={() => props.threeDotsClicked()}
        >
          <FishingTripIcon name="icon-dots" size={scale(17)} color={BLACK} />
        </TouchableOpacity>
      )}
    </View>
  );
}
