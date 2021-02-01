import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { SUPERNOVA } from "../../utils/colors";
import styles from "./styles";

interface CardProps {
  title: string;
  address: string;
  date: string;
  rate: string;
  username?: string;
  bgImage: string;
  userImage?: string;
  customButtom?: React.ReactNode;
}

export default function Card(props: CardProps): JSX.Element {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.wrapper}
      onPress={() => console.log("pressed 1")}
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
              onPress={() => console.log("pressed 2")}
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
          <View style={styles.textRate}>
            <FishingTripIcon
              name="icon-star"
              size={14}
              color={SUPERNOVA}
              style={{ marginRight: 5 }}
            />
            <Text style={styles.contentRightText}>{props.rate}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
