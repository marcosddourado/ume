import React, { useContext } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  View,
  ActivityIndicator,
  TouchableOpacity,
  Alert,
  ImageResizeMode,
  Platform,
  Linking
} from "react-native";
import { Image } from "react-native-elements";
import { Video } from "expo-av";
import * as IntentLauncher from "expo-intent-launcher";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import styles from "./style";
import { scale } from "../../utils/scales";
import { MAIN_COLOR } from "../../utils/colors";
import compressImage from "../../utils/compressImage";
import Toast from "../Toast/Toast";
import MultiImagePicker from "../MultiImagePicker/MultiImagePicker";
import { InitialImagesAmount } from "../../modules/fishing/create_fishing_day";

interface UploadProps {
  width?: number;
  height?: number;
  maxHeight?: number;
  uri?: string;
  isAVideo?: boolean;
  marginLeft?: number;
  doNotRenderImage?: boolean;
  allowVideo?: boolean;
  onImageChange?: (result: { uri: string; type: "image" | "video"; }) => void;
  onImagesChange?: (result: any[]) => void;
  showDots?: boolean;
  dotsPressed?: () => void;
  aspect?: [number, number];
  imageResizeMode?: ImageResizeMode;
  multi?: boolean;
}

Upload.defaultProps = {
  width: "100%",
  height: scale(124),
  maxHeight: scale(124)
};

export default function Upload(props: UploadProps): JSX.Element {
  const [uploadedImage, setImageResult] = React.useState({ uri: "", type: "" });
  const [chooseImages, setChooseImages] = React.useState(false);
  const initialImagesAmount = useContext(InitialImagesAmount);

  const showAlert = async () => {
    Alert.alert(
      "IMAGEM",
      "Selecione de onde deseja capturar a imagem.",
      [
        { text: "Cancelar", onPress: () => { } },
        {
          text: "Câmera",
          onPress: () => {
            if (!props.multi || (props.multi && initialImagesAmount < 20)) {
              pickImage();
            } else {
              Toast.show("Você já possui 20 fotos. Remova uma ou mais para escolher outra(s).");
            }
          }
        },
        {
          text: "Galeria",
          onPress: () => {
            if (props.multi && initialImagesAmount < 20) {
              setChooseImages(true);
            } else if (props.multi) {
              Toast.show("Você já possui 20 fotos. Remova uma ou mais para escolher outra(s).");
            } else {
              pickImage(true);
            }
          }
        }
      ],
      { cancelable: false }
    );
  };

  const pickImage = async (isLibrary = false) => {
    const config = { allowsEditing: true, aspect: props.aspect };

    let result: any = {};
    if (isLibrary) {
      await ImagePicker.requestCameraRollPermissionsAsync();
      result = await ImagePicker.launchImageLibraryAsync({
        ...config,
        mediaTypes:
          ImagePicker.MediaTypeOptions[props.allowVideo ? "All" : "Images"]
      });
    } else {
      await ImagePicker.requestCameraPermissionsAsync();
      const permission = await ImagePicker.getCameraPermissionsAsync();
      if (permission.granted) {
        result = await ImagePicker.launchCameraAsync(config);
      } else {
        Alert.alert(
          "Permissões Necessárias",
          "Libere acesso à câmera para que você possa inserir fotos no seu perfil, nas pescarias e nos posts",
          [
            { text: "Cancel", onPress: () => console.log("Cancel Pressed"), style: "cancel" },
            {
              text: "Settings",
              onPress: () => (Platform.OS === "ios"
                ? Linking.openURL("app-settings:")
                : IntentLauncher.startActivityAsync(
                  IntentLauncher.ACTION_MANAGE_APPLICATIONS_SETTINGS
                ))
            }
          ]
        );
      }
    }

    const DURATION_IN_SECONDS = result.duration * 0.001;
    if (result.duration && DURATION_IN_SECONDS > 60) {
      Toast.show("O vídeo deve ser menor que 1 minuto!");
    } else if (!result.cancelled) {
      if (result.type === "image") {
        result = { ...result, ...(await compressImage(result)) };
      }

      setImageResult(result);

      if (props.multi) {
        props.onImagesChange([result]);
      } else {
        props.onImageChange(result);
      }
    }
  };

  const onMultiSelectPressed = (photos: object[]): void => {
    setChooseImages(false);
    props.onImagesChange(photos);
  };

  const uri = uploadedImage.uri || props.uri;
  return (
    <TouchableOpacity onPress={() => showAlert()} style={{ flex: 1 }}>
      <View
        style={[
          styles.wrapper,
          {
            width: props.width,
            minHeight: props.height,
            maxHeight: props.maxHeight,
            marginLeft: props.marginLeft
          }
        ]}
      >
        {!props.doNotRenderImage && uri ? (
          <View style={{ width: "100%", height: "100%", borderRadius: 5 }}>
            {props.showDots ? (
              <TouchableOpacity
                style={styles.dotsWrapper}
                onPress={() => props.dotsPressed()}
              >
                <FishingTripIcon
                  name="icon-dots"
                  size={scale(17)}
                  color={MAIN_COLOR}
                />
              </TouchableOpacity>
            ) : (
              <></>
            )}
            {uploadedImage.type === "video" || props.isAVideo ? (
              <Video
                source={{ uri }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="contain"
                shouldPlay
                style={{ height: scale(220), borderRadius: 5 }}
              />
            ) : (
              <Image
                PlaceholderContent={(
                  <View style={{ flex: 1 }}>
                    <ActivityIndicator />
                  </View>
                )}
                resizeMode={props.imageResizeMode ? props.imageResizeMode : "cover"}
                style={{
                  resizeMode: "cover",
                  height: "100%",
                  borderRadius: 5
                }}
                containerStyle={{
                  borderRadius: 5,
                  overflow: "hidden"
                }}
                source={{ uri }}
              />
            )}
          </View>
        ) : (
          <FishingTripIcon name="icon-cross" size={25} color="#000" />
        )}
      </View>

      <MultiImagePicker
        isOpen={chooseImages}
        onClosed={() => setChooseImages(false)}
        onSelectPressed={onMultiSelectPressed}
      />
    </TouchableOpacity>
  );
}
