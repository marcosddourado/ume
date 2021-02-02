import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Linking
} from "react-native";
import styles from "./styles";

interface CardProps {
  image: string;
  url: string;
}

export default function PartnerCard(props: CardProps): JSX.Element {
  return (<View style={styles.wrapper}>
    <Image
      style={styles.image}
      source={{ uri: props.image }}
      resizeMode="contain"
    />

    <TouchableOpacity
      style={styles.button}
      onPress={() => Linking.openURL(props.url)}
    >
      <View>
        <Text style={styles.text}>Saiba mais</Text>
      </View>
    </TouchableOpacity>
  </View>);
}
