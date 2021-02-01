import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { scale } from "../../utils/scales";
import styles from "./style";

interface SmilesRatesProps {
  title: string;
  amountOfQuestions: number;
  questionIxdex: number;
  onRateSeleted?: (value: number) => void;
}

const items: {
  icon: string;
  subtitle: string;
}[] = [
  {
    icon: require("../../../assets/smile-terrible.png"),
    subtitle: "Péssimo"
  },
  {
    icon: require("../../../assets/smile-bad.png"),
    subtitle: "Ruim"
  },
  {
    icon: require("../../../assets/smile-reasonable.png"),
    subtitle: "Razoável"
  },
  {
    icon: require("../../../assets/smile-good.png"),
    subtitle: "Boa"
  },
  {
    icon: require("../../../assets/smile-excelent.png"),
    subtitle: "Excelente"
  }
];

export default function SmilesRates(props: SmilesRatesProps): JSX.Element {
  const [rate, setRate] = React.useState<number>(1);

  const handleRate = (value: number) => {
    setRate(value);
    props.onRateSeleted(value);
  };

  return (
    <View>
      <Text style={styles.textFishing}>{props.title}</Text>
      <View style={styles.wrapper}>
        {items.map((item, index) => {
          let smileValue = ++index;
          return (
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.iconButtonWrapper}
              onPress={() => handleRate(smileValue)}
              key={`simile-${index}`}
            >
              <Image
                style={{ width: scale(40), height: scale(40) }}
                // @ts-ignore
                source={item.icon}
              />
              <Text style={styles.iconText}>{item.subtitle}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={styles.rateText}>
        {props.questionIxdex}/{props.amountOfQuestions}
      </Text>
    </View>
  );
}
