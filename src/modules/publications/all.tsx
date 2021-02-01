import React, { useEffect, useState } from "react";
import {
  View, BackHandler, Text, LayoutChangeEvent
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import moment from "moment";
import { Image } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";
import { scale } from "../../utils/scales";
import { DODGER_BLUE, MAIN_COLOR } from "../../utils/colors";

moment.locale("pt-br");

interface Props {
  textToSearch?: string;
  searching?: boolean;
}

function AllPublications(props: Props): JSX.Element {
  const [limitContentHeight, setLimitContentHeight] = useState(0);

  useEffect(() => {
    if (!props.searching && !props.textToSearch) {
      backButtonHandler();
    }

    return function cleanup() {
      BackHandler.removeEventListener("hardwareBackPress", destroyBackButton);
    };
  }, [props.searching, props.textToSearch]);

  function backButtonHandler() {
    BackHandler.addEventListener("hardwareBackPress", destroyBackButton);
  }

  function destroyBackButton() {
    // Retornar true indica que o evento não deve passar deste ouvinte.
    return Actions.currentScene === "all_pubications";
  }

  const renderUserLineInfo = (title: string, info: string) => <View style={styles.userLineInfo}>
    <Text style={styles.title}>
      {`${title}:`}
    </Text>
    <Text style={styles.content}>{info}</Text>
  </View>;

  const numberToReal = (amount: number) => `R$ ${amount.toFixed(2).replace(".", ",")}`;

  const user = {
    name: "Marcos Dourado",
    avatarUrl: "https://cdn.pixabay.com/photo/2012/04/25/08/46/face-41697_960_720.png",
    email: "marcos@ume.com.br",
    createdAt: 1612204394000
  };

  const limit = { total: 2000, used: 500 };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={styles.topInfo}>
        <Image
          containerStyle={styles.profileImageContentStyle}
          style={styles.profileImageStyles}
          source={{ uri: user.avatarUrl }}
        />
        <Text style={styles.bigTitle}>{user.name}</Text>
      </View>

      {renderUserLineInfo("E-mail", user.email)}
      {renderUserLineInfo("Data de criação", moment(user.createdAt).format("DD/MM/YYYY"))}

      <View style={styles.limitWrapper}>
        <View style={styles.limitLineTitle}>
          <Entypo name="bar-graph" size={15} color="black" style={{ marginRight: scale(2.5) }} />
          <Text style={styles.bigTitle}>Limites</Text>
        </View>

        <View
          style={{ flexDirection: "row" }}
          onLayout={(e: LayoutChangeEvent) => {
            setLimitContentHeight(e.nativeEvent.layout.height);
            console.log("aqyu limitContentHeight", limitContentHeight);
          }}
        >
          <View style={{ width: "90%" }}>
            <View style={styles.limitLine}>
              <Text style={styles.title}>Limite total:</Text>
              <Text style={styles.money}>{numberToReal(limit.total)}</Text>
            </View>
            <View style={styles.limitLine}>
              <Text style={styles.title}>Limite já utilizado:</Text>
              <Text style={[styles.money, { color: DODGER_BLUE }]}>{numberToReal(limit.used)}</Text>
            </View>
            <View style={styles.limitLine}>
              <Text style={styles.title}>Limite disponível:</Text>
              <Text style={[styles.money, { color: MAIN_COLOR }]}>
                {numberToReal(limit.total - limit.used)}
              </Text>
            </View>
          </View>

          <View style={{ width: "10%", justifyContent: "center", alignItems: "flex-end" }}>
            <View style={{
              width: scale(15),
              height: limitContentHeight,
              backgroundColor: MAIN_COLOR
            }}
            >
              <View style={{
                width: "100%",
                height: limit.total ? (limit.used / limit.total) * limitContentHeight : 0,
                backgroundColor: DODGER_BLUE
              }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default AllPublications;
