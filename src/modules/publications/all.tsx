import React, { useEffect } from "react";
import { View, BackHandler, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Actions } from "react-native-router-flux";
import _ from "lodash";
import moment from "moment";
import { Image } from "react-native-elements";
import styles from "./styles";
import { scale } from "../../utils/scales";

moment.locale("pt-br");

interface Props {
  textToSearch?: string;
  searching?: boolean;
}

function AllPublications(props: Props): JSX.Element {
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

 const renderUserLineInfo = (title: string, info:string) => <View style={styles.userLineInfo}>
   <Text style={styles.title}>
     {`${title}:`}
   </Text>
   <Text style={styles.content}>{info}</Text>
 </View>;

  const user = {
    name: "Marcos Dourado",
    avatarUrl: "https://cdn.pixabay.com/photo/2012/04/25/08/46/face-41697_960_720.png",
    email: "marcos@ume.com.br",
    createdAt: 1612204394000
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <View style={{ width: "100%", alignItems: "center", paddingBottom: scale(20) }}>
        <Image
          containerStyle={styles.profileImageContentStyle}
          style={styles.profileImageStyles}
          source={{ uri: user.avatarUrl }}
        />
        <Text style={styles.profileUserName}>{user.name}</Text>
      </View>

      {renderUserLineInfo("E-mail", user.email)}
      {renderUserLineInfo("Data de criação", moment(user.createdAt).format("DD/MM/YYYY"))}

    </View>
  );
}

export default AllPublications;
