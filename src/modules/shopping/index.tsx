import React, { useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import styles from "./styles";
import BalanceCard from "./components/BalanceCard/BalanceCard";
import { MAIN_COLOR, RED, YELLOW } from "../../utils/colors";
import PurchaseCard from "./components/PurchaseCard/PurchaseCard";
import { purchases } from "../../db/data";

moment.locale("pt-br");

function Shopping(): JSX.Element {
  useEffect(() => {
    Actions.refresh({
      title: `Compras (${_.size(purchases)})`
    });
  }, []);

  const renderItem = (listRenderItem) => {
    const { item } = listRenderItem;
    return <PurchaseCard unity={item.unity} date={item.date} price={item.price} />;
  };

  const renderListHeaderComponent = () => <>
    <View style={styles.cardsWrapper}>
      <BalanceCard color={MAIN_COLOR} price={21.00} title="Pago" />
      <BalanceCard color={YELLOW} price={42.00} title="A vencer" />
      <BalanceCard color={RED} price={45.34} title="Vencidas" />
    </View>

    <Text style={styles.title}>Lista de compras:</Text>
  </>;

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <FlatList
        ListHeaderComponent={renderListHeaderComponent}
        keyExtractor={(_, id) => `purchase_${id}`}
        data={purchases}
        renderItem={renderItem}
      />
    </View>
  );
}

export default Shopping;
