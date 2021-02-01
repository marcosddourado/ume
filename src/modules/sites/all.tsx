import React, { useEffect } from "react";
import { View, BackHandler } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import moment from "moment";
import styles from "./styles";
import KeyboarAvoidWithoutScroll from "../../components/KeyboarAvoidWithoutScroll/KeyboarAvoidWithoutScroll";

moment.locale("pt-br");

interface Props {
  textToSearch?: string;
  searching?: boolean;
}

function AllSites(props: Props): JSX.Element {
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
      <View style={{ backgroundColor: "#eee" }}>
        <StatusBar style="dark" />

      </View>
    </KeyboarAvoidWithoutScroll>
  );
}

export default AllSites;
