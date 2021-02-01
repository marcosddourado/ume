import React, { useContext, useEffect, useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  ActivityIndicator
} from "react-native";
import Modal from "react-native-modalbox";
import { BlackPortal } from "react-native-portal";
import { ImageBrowser } from "expo-image-picker-multiple";
import styles from "./styles";
import { MAIN_COLOR, DODGER_BLUE } from "../../utils/colors";
import { scale } from "../../utils/scales";
import { NavStyles } from "../../navigation/DefaultHeaderProps";
import { ButtonSolid } from "../Buttons";
import FishingTripIcon from "../FishingTripIcon/FishingTripIcon";
import compressImage from "../../utils/compressImage";
import sendErrorToSentry from "../../utils/sendErrorToSentry";
import Toast from "../Toast/Toast";
import { InitialImagesAmount } from "../../modules/fishing/create_fishing_day";

interface Props {
  isOpen: boolean;
  onClosed(): void;
  onSelectPressed(photos: object[]): void;
}

export default function MultiImagePicker(props: Props): JSX.Element {
  const [, setOnSubmit] = useState();
  const [loading, setLoading] = useState(false);
  const [amountOfPhotos, setAmountOfPhotos] = useState(0);
  let [photos, setPhotos] = useState([]);
  const initialImagesAmount = useContext(InitialImagesAmount);

  useEffect(() => {
    if (props.isOpen) {
      setAmountOfPhotos(0);
      setLoading(false);
    }
  }, [props.isOpen]);

  useEffect(() => {
    if (amountOfPhotos + initialImagesAmount >= 20) {
      Toast.show("20 fotos no máximo, por favor.");
    }
  }, [amountOfPhotos]);

  const renderSelectedComponent = (number) => (
    <View style={styles.selectedComponent}>
      <Text style={styles.selectedNumberWrapper}>
        {number}
      </Text>
    </View>
  );

  async function onSelectedPressed() {
    if (!loading) {
      setLoading(true);

      try {
        photos = await photos;
        photos = await Promise.all(photos.map(async (photo) => {
          photo = await compressImage(photo);
          return photo;
        }));

        props.onSelectPressed(photos);
      } catch (error) {
        console.log("MultiImagePicker  error:", error);
        sendErrorToSentry(error);
        Toast.show("Oops! Erro ao carregar imagens. Tente mais tarde");
      }

      setLoading(false);
    }
  }

  const onChange = (num, onSubmit) => {
    setAmountOfPhotos(num);
    setOnSubmit(onSubmit);
  };

  const preloaderComponent = () => <ActivityIndicator color={DODGER_BLUE} size="large" style={styles.loader} />;

  return (
    <BlackPortal name="modal">
      <Modal
        style={styles.modalContainer}
        position="bottom"
        isOpen={props.isOpen}
        swipeArea={50}
        useNativeDriver
        onClosed={props.onClosed}
      >
        {props.isOpen && <>
          <View style={styles.header}>
            <TouchableOpacity
              activeOpacity={1}
              onPress={props.onClosed}
              style={{ paddingLeft: scale(20) }}
            >
              <FishingTripIcon name="icon-voltar" size={scale(18)} color={MAIN_COLOR} />
            </TouchableOpacity>
            <Text style={[NavStyles.defaultTitle, { marginLeft: -scale(20) }]}>
              {amountOfPhotos}
              {" "}
              {amountOfPhotos > 1 ? "selecionados" : "selecionado"}
            </Text>
            <View />
          </View>

          <ImageBrowser
            max={20 - initialImagesAmount}
            callback={setPhotos}
            onChange={onChange}
            renderSelectedComponent={renderSelectedComponent}
            preloaderComponent={preloaderComponent}
            emptyStayComponent={() => <></>}
          />

          <View style={styles.selectButtonWrapper}>
            <ButtonSolid
              title={loading ? "Carregando Imagens...." : "Selecionar"}
              onPress={onSelectedPressed}
              flat
            />
          </View>
        </>}
      </Modal>
    </BlackPortal>
  );
}
