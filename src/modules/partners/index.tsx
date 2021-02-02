import React from "react";
import {
 Text, FlatList, ScrollView, View
} from "react-native";
import { StatusBar } from "expo-status-bar";
import moment from "moment";
import styles from "./styles";
import { partners } from "../../db/data";
import PartnerCard from "./components/PartnerCard/PartnerCard";

moment.locale("pt-br");

function Partners(): JSX.Element {
  return (
    <ScrollView style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>Acessórios</Text>
      <FlatList
        keyExtractor={(_, id) => `partner_acc_${id}`}
        data={partners.accessories}
        renderItem={({ item }) => <PartnerCard image={item.image} url={item.url} />}
        horizontal
      />

      <Text style={styles.title}>Alimentos</Text>
      <FlatList
        keyExtractor={(_, id) => `partner_food_${id}`}
        data={partners.food}
        renderItem={({ item }) => <PartnerCard image={item.image} url={item.url} />}
        horizontal
      />

      <Text style={styles.title}>Automóveis</Text>
      <FlatList
        keyExtractor={(_, id) => `partner_cat_${id}`}
        data={partners.car}
        renderItem={({ item }) => <PartnerCard image={item.image} url={item.url} />}
        horizontal
      />

      <View style={styles.bottomPadding} />
    </ScrollView>
  );
}

export default Partners;
