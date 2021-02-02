import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { convertNumberToReal } from "../../../../utils/convertNumberToReal";
import { milisecondsToDate } from "../../../../utils/milisecondsToDate";
import styles from "./styles";

interface CardProps {
  unity: string;
  date: number;
  price: number;
}

export default function PurchaseCard(props: CardProps): JSX.Element {
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setPrice(convertNumberToReal(props.price));
    setDate(milisecondsToDate(props.date));
  }, []);

  function renderLine(title:string, value: string) {
    return <View style={styles.lineWrapper}>
      <Text style={styles.subtitle}>{`${title}:`}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>;
  }

  return (<View style={styles.wrapper}>
    <Text style={styles.title}>Tropical Multiloja</Text>

    {renderLine("Unidade", props.unity)}
    {renderLine("Data da compra", date)}
    {renderLine("Valor da compra", price)}
  </View>);
}
