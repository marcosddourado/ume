import React, { useState } from "react";
import * as yup from "yup";
import {
  View, Text, SafeAreaView, TouchableOpacity
} from "react-native";
import { Actions } from "react-native-router-flux";
import FishingTripIcon from "../../../components/FishingTripIcon/FishingTripIcon";
import { MAIN_COLOR, BLACK, CARIBBEAN_GREEN } from "../../../utils/colors";
import TextInput from "../../../components/TextInput/TextInput";
import { ButtonOutline } from "../../../components/Buttons";
import withFormErrorsHandler from "../../../hoc/withFormErrorsHandler";
import ModalAlert from "../../../components/ModalUi/ModalAlert";
import BottomHalfModal from "../../../components/BottomHalfModal/BottomHalfModal";
import styles from "../styles";
import { scale } from "../../../utils/scales";
import FishingTripsLogo from "../../../components/FishingTripsLogo/FishingTripsLogo";

const newPasswordSchema = yup.object().shape({
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
  fields,
  valid
}): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [openModal, setOpenModal] = React.useState<boolean>(false);

  const handleSubmit = async () => {
    const isValid = await onSubmit(fields);

    if (isValid) {
      console.log(fields);
      setOpenModal(true);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <FishingTripsLogo fill={MAIN_COLOR} />
        </View>
        <View style={styles.content}>
          <Text style={styles.titleBig}>Cadastre sua nova senha</Text>

          <View style={styles.formWrapper}>
            <TextInput
              errors={errors}
              autoCompleteType="email"
              name="email"
              placeholder="E-mail"
              onChangeText={(text: string) => inputChange({
                field: "email",
                value: text
              })}
            />
            <TextInput
              errors={errors}
              secureTextEntry={!showPassword}
              placeholder="Confirmar nova Senha"
              name="password"
              onChangeText={(text: string) => inputChange({
                field: "password",
                value: text
              })}
              iconRight={
                <TouchableOpacity
                  activeOpacity={0.5}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  {!showPassword ? (
                    <FishingTripIcon name="icon-eye" size={15} color={BLACK} />
                  ) : (
                    <FishingTripIcon
                      name="icon-eye-dashed"
                      size={19}
                      color={BLACK}
                    />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
        </View>

        {valid && (
          <View style={styles.buttonFooter}>
            <ButtonOutline title="Salvar" onPress={handleSubmit} />
          </View>
        )}
      </View>
      {openModal && (
        <BottomHalfModal
          modalStyle={{ height: scale(290) }}
          isOpen={openModal}
          onClosed={() => {}}
        >
          <ModalAlert
            icon={
              <FishingTripIcon
                name="icon-confirm"
                size={scale(35)}
                color={CARIBBEAN_GREEN}
              />
            }
            button={
              <ButtonOutline
                onPress={() => {
                  setOpenModal(false);
                  Actions.login();
                }}
                styledButtonStyle={{ width: "100%" }}
                type="outline"
                title="Fechar"
              />
            }
            title="Nova senha cadastrada!"
            text="Nova senha cadastrada!"
          />
        </BottomHalfModal>
      )}
    </SafeAreaView>
  );
})({
  schema: newPasswordSchema,
  isValidationSync: true,
  initialValues: {
    email: "",
    password: ""
  }
});
