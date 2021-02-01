import React, { useState } from "react";
import * as yup from "yup";
import {
  Text,
  SafeAreaView,
  View,
  TouchableOpacity,
  BackHandler,
  Image
} from "react-native";
import { Actions } from "react-native-router-flux";
import { StatusBar } from "expo-status-bar";
import styles from "../styles";
import FishingTripIcon from "../../../components/FishingTripIcon/FishingTripIcon";
import { BLACK } from "../../../utils/colors";
import TextInput from "../../../components/TextInput/TextInput";
import {
  ButtonSolid,
  ButtonClear,
  ButtonOutline
} from "../../../components/Buttons";
import { scale } from "../../../utils/scales";
import withFormErrorsHandler from "../../../hoc/withFormErrorsHandler";
import { NavStyles } from "../../../navigation/DefaultHeaderProps";

const loginSchema = yup.object().shape({
  password: yup.string().required("Campo de obrigatório"),
  email: yup
    .string()
    .email("Insira um email válido")
    .required("Campo de obrigatório")
});

export default withFormErrorsHandler(({
  errors,
  onSubmit,
  inputChange,
  fields
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  React.useEffect(() => {
    backButtonHandler();

    return function cleanup() {
      BackHandler.removeEventListener("hardwareBackPress", destroyBackButton);
    };
  }, []);

  function backButtonHandler() {
    BackHandler.addEventListener("hardwareBackPress", destroyBackButton);
  }
  function destroyBackButton() {
    // Retornar true indica que o evento não deve passar deste ouvinte.
    return Actions.currentScene === "login";
  }

  const handleShowPassword = (): void => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const isValid = await onSubmit(fields, loginSchema);
    if (isValid) {
      Actions.posts();
    } else {
      console.log("handleSubmit errors: ", errors);
    }

    setLoading(false);
  };

  return (
    <SafeAreaView style={NavStyles.AndroidSafeArea}>
      <StatusBar style="dark" />

      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <Image
            style={{ height: scale(80), aspectRatio: 1 }}
            source={require("../../../../assets/icon.png")}
          />
        </View>
        <View style={styles.content}>
          <View>
            <Text style={styles.title}>Fazer login</Text>

            <View style={styles.formWrapper}>
              <TextInput
                errors={errors}
                label="E-mail"
                autoCompleteType="email"
                keyboardType="email-address"
                value={fields.email}
                onChangeText={(text: string) => inputChange({
                  field: "email",
                  value: text
                })}
                name="email"
                maxLength={128}
              />
              <TextInput
                errors={errors}
                label="Senha"
                autoCompleteType="password"
                secureTextEntry={!showPassword}
                value={fields.password}
                name="password"
                onChangeText={(text: string) => inputChange({ field: "password", value: text })}
                iconRight={(
                  <TouchableOpacity
                    activeOpacity={0.5}
                    onPress={handleShowPassword}
                  >
                    {!showPassword ? (
                      <FishingTripIcon
                        name="icon-eye"
                        size={15}
                        color={BLACK}
                      />
                    ) : (
                      <FishingTripIcon
                        name="icon-eye-dashed"
                        size={19}
                        color={BLACK}
                      />
                      )}
                  </TouchableOpacity>
                )}
                maxLength={128}
              />
            </View>
          </View>
          <View style={styles.buttonsWrapper}>
            <ButtonSolid
              title={loading ? "Entrando..." : "Entrar"}
              onPress={handleSubmit}
              disabled={!fields.password || !fields.email}
            />
            <ButtonClear
              title="Esqueci minha senha"
              containerStyle={{ marginTop: scale(10) }}
              onPress={() => Actions.forgot_password()}
            />
            <View style={styles.buttonsLinedDiv} />
            <ButtonOutline
              title="Fazer Cadastro"
              onPress={() => Actions.signup_step_one()}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
})({
  schema: loginSchema,
  initialValues: {
    email: "",
    password: "",
    connected: true
  }
});
