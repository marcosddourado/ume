import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import moment from "moment";
import styles from "./styles";
import KeyboarAvoidWithoutScroll from "../../components/KeyboarAvoidWithoutScroll/KeyboarAvoidWithoutScroll";
import BalanceCard from "./components/BalanceCard";
import { MAIN_COLOR, RED, YELLOW } from "../../utils/colors";

moment.locale("pt-br");

interface Props {
  textToSearch?: string;
  searching?: boolean;
}

function Explore(props: Props): JSX.Element {
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

  return (
    <KeyboarAvoidWithoutScroll>
      <View style={styles.container}>
        <StatusBar style="dark" />

        <View style={styles.cardsWrapper}>
          <BalanceCard color={MAIN_COLOR} price={21.00} title="Pago" />
          <BalanceCard color={YELLOW} price={42.00} title="A vencer" />
          <BalanceCard color={RED} price={45.34} title="Vencidas" />
        </View>
      </View>
    </KeyboarAvoidWithoutScroll>
  );
}

export default Explore;
