import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { SUPERNOVA } from "../../utils/colors";
import styles from "./styles";

interface CardProps {
  title: string;
  address: string;
  date: string;
  rate?: number;
  username?: string;
  bgImage: string;
  userImage?: string;
  customButtom?: React.ReactNode;
  onPress?: () => void;
}

export default function CardFishing(props: CardProps): JSX.Element {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={props.onPress}
    >
      <View style={styles.imageWrapper}>
        <Image
          style={styles.backgroundImage}
          source={{
            uri: props.bgImage
          }}
        />
      </View>
      <View style={styles.contentWrapper}>
        <View style={{ flex: 1 }}>
          {props.userImage && props.username && (
            <TouchableOpacity
              style={styles.userImageWrapper}
              activeOpacity={0.8}
              onPress={() => console.log("pressed 3")}
            >
              <Image
                style={styles.backgroundProfile}
                source={{
                  uri: props.userImage
                }}
              />
              <Text style={styles.textUsername}>{props.username}</Text>
            </TouchableOpacity>
          )}
          <Text style={styles.textTitle}>{props.title}</Text>
          <Text style={styles.textAddress}>{props.address}</Text>
          {props.customButtom || null}
        </View>
        <View style={styles.contentRight}>
          <Text style={styles.contentRightText}>{props.date}</Text>
          {props.rate && (
            <View style={styles.textRate}>
              <FishingTripIcon
                name="icon-star"
                size={14}
                color={SUPERNOVA}
                style={{ marginRight: 5 }}
              />
              <Text style={styles.contentRightText}>
                {Number(props.rate).toFixed(2)}
              </Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
