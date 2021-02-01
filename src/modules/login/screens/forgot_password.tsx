import React from "react";
import * as yup from "yup";
import { View, Text, SafeAreaView } from "react-native";
import { Actions } from "react-native-router-flux";
import FishingTripIcon from "../../../components/FishingTripIcon/FishingTripIcon";
import { MAIN_COLOR, CARIBBEAN_GREEN } from "../../../utils/colors";
import TextInput from "../../../components/TextInput/TextInput";
import { ButtonOutline } from "../../../components/Buttons";
import withFormErrorsHandler from "../../../hoc/withFormErrorsHandler";
import ModalAlert from "../../../components/ModalUi/ModalAlert";
import BottomHalfModal from "../../../components/BottomHalfModal/BottomHalfModal";
import styles from "../styles";
import { scale } from "../../../utils/scales";
import FishingTripsLogo from "../../../components/FishingTripsLogo/FishingTripsLogo";

const forgotPasswordSchema = yup.object().shape({
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
  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);
  const handleSubmit = async () => {
    const isValid = await onSubmit(fields);

    if (isValid) {
      setLoading(true);

      setLoading(false);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <FishingTripsLogo fill={MAIN_COLOR} />
        </View>
        <View style={styles.content}>
          <Text style={styles.titleBig}>Recuperação de senha</Text>

          <View style={styles.formWrapper}>
            <TextInput
              errors={errors}
              autoCompleteType="email"
              placeholder="Insira o e-mail cadastrado para sua conta"
              keyboardType="email-address"
              name="email"
              onChangeText={(text: string) => inputChange({
                field: "email",
                value: text
              })}
              maxLength={128}
            />
          </View>

          <Text style={styles.textWarning}>
            Lhe enviaremos um e-mail com mais informações sobre como redefinir
            sua senha.
          </Text>
        </View>

        {valid && (
          <View style={styles.buttonFooter}>
            <ButtonOutline
              title={loading ? "Enviando..." : "Enviar"}
              onPress={handleSubmit}
            />
          </View>
        )}
      </View>
      {openModal && (
        <BottomHalfModal
          modalStyle={{ height: scale(350) }}
          isOpen={openModal}
          onClosed={() => {}}
        >
          <ModalAlert
            icon={(
              <FishingTripIcon
                name="icon-confirm"
                size={scale(35)}
                color={CARIBBEAN_GREEN}
              />
            )}
            button={(
              <ButtonOutline
                onPress={() => {
                  setOpenModal(false);
                  Actions.pop();
                }}
                styledButtonStyle={{ width: "100%" }}
                type="outline"
                title="Fechar"
              />
            )}
            title="Recuperação de senha"
            text="Você receberá um email automático com um link para redefinir sua senha."
          />
        </BottomHalfModal>
      )}
    </SafeAreaView>
  );
})({
  schema: forgotPasswordSchema,
  isValidationSync: true,
  initialValues: {
    email: ""
  }
});
