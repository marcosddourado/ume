import React from "react";
import { ActivityIndicator, View } from "react-native";
import SectionedMultiSelect from "react-native-sectioned-multi-select";
import { MaterialIcons } from "@expo/vector-icons";
import _ from "lodash";
import styles from "./styles";
import { MAIN_COLOR, DODGER_BLUE } from "../../utils/colors";
import { scale } from "../../utils/scales";

interface Props {
  value?: any;
  onChange?: (itemValue: any) => void;
  items?: { label: string; value: string | number }[];
  placeholder?: string;
  loading?: boolean;
}

export default function Select(props: Props): JSX.Element {
  const [loading, setLoading] = React.useState<boolean>(props.loading);
  React.useEffect(() => { setLoading(props.loading); }, [props.loading]);

  const contains = (word: string, charToCheck: string) => {
    word = word
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();
    charToCheck = charToCheck
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLocaleLowerCase();

    return word.includes(charToCheck);
  };

  function filterItems(searchTerm: string) {
    return _.filter(props.items, ({ label }) => contains(label, searchTerm));
  }

  return (
    <View style={styles.selectWrapper}>
      <SectionedMultiSelect
        items={props.items}
        loading={loading}
        loadingComponent={() => (
          <View style={styles.loadingWrapper}>
            <ActivityIndicator color={DODGER_BLUE} size="large" />
          </View>
        )}
        // @ts-ignore
        IconRenderer={MaterialIcons}
        filterItems={filterItems}
        uniqueKey="value"
        displayKey="label"
        selectText={props.placeholder}
        searchPlaceholderText="Pesquisar..."
        confirmText="Confirmar"
        colors={{ primary: MAIN_COLOR }}
        styles={{
          confirmText: { fontFamily: "OverpassRegular", fontSize: 17 },
          itemText: { fontFamily: "OverpassRegular", fontSize: 16 },
          searchTextInput: { fontFamily: "OverpassRegular", fontSize: 16 },
          selectedItem: { backgroundColor: "rgba(0,197,161,0.1)" },
          selectToggle: {
            height: scale(56),
            alignItems: "center",
            justifyContent: "center",
            padding: scale(15)
          },
          container: { maxHeight: "80%", height: "25%" },
          modalWrapper: { justifyContent: "center" }
        }}
        noResultsComponent={() => <></>}
        noItemsComponent={() => <></>}
        onSelectedItemsChange={(items) => {
          props.onChange(items[0] !== props.value ? items[0] : "");
        }}
        single
        selectedItems={[props.value]}
      />
    </View>
  );
}
