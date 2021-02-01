import React from "react";
import { View, TextInput } from "react-native";
import { Actions } from "react-native-router-flux";
import moment from "moment";
import { BackButton } from "../../navigation/DefaultHeaderProps";
import styles from "./styles";

export default function Search(): JSX.Element {
  const [query, setQuery] = React.useState<string>("");

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.modalSearchHeader}>
        <View style={styles.modalSearchHeaderWrapper}>
          <BackButton to="explore" />
          <TextInput
            autoFocus
            style={styles.modalSearchTextInput}
            placeholder="Buscar pescarias por título, cidade, etc..."
            returnKeyType="search"
            onChangeText={(query) => setQuery(query)}
            onSubmitEditing={() => {
              Actions.explore();

              // Este ajuste técnico faz com que a página "explore" receba
              // os parâmetros "filterWithAlgolia", "refreshToFilter" e "query" pois enviá-los
              // normalmente (Actions.explore({ filterWithAlgolia, query}))
              // não surtiu efeito
              setTimeout(() => {
                Actions.refresh({
                  filterWithAlgolia: true,
                  query,
                  refreshToFilter: moment().valueOf()
                });
              }, 10);
            }}
          />
        </View>
      </View>
    </View>
  );
}
