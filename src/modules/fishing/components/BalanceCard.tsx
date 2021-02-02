import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { convertNumberToReal } from "../../../utils/convertNumberToReal";
import styles from "./styles";

interface CardProps {
  title: string;
  price: number;
  color: string;
}

export default function BalanceCard(props: CardProps): JSX.Element {
  const [price, setPrice] = useState("");

  useEffect(() => {
    setPrice(convertNumberToReal(props.price));
  }, []);

  return (<View style={[styles.wrapper, { borderColor: props.color }]}>
    <Text style={styles.title}>{props.title}</Text>

    <Text style={[styles.price, { color: props.color }]}>{price}</Text>
  </View>);
}
