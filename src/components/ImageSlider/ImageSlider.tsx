/* eslint-disable react/jsx-closing-tag-location */
import { StatusBar } from "expo-status-bar";
import React, { ReactElement } from "react";
import {
  View, TouchableOpacity, GestureResponderEvent, Modal, Text
} from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { IImageInfo } from "react-native-image-zoom-viewer/built/image-viewer.type";
import FishingTripIcon from "../../components/FishingTripIcon/FishingTripIcon";
import { MAIN_COLOR } from "../../utils/colors";
import { scale } from "../../utils/scales";
import styles from "./styles";

interface Props {
  selectedImageIndex?: number;
  images: IImageInfo[];
  onClose?: (event?: GestureResponderEvent) => void;
  visible: boolean;
  hideCounter?: boolean;
}
export default function ImageSlider(props: Props): JSX.Element {
  function renderHeader(): ReactElement<any, any> {
    return <View style={styles.header}>
      <TouchableOpacity onPress={props.onClose}>
        <View style={styles.backWrapper}>
          <FishingTripIcon name="icon-voltar" size={scale(17)} color={MAIN_COLOR} />
        </View>
      </TouchableOpacity>
    </View>;
  }

  function renderIndicator(currentIndex: number, allSize: number): ReactElement<any> {
    return props.hideCounter ?
      <></> :
      <View style={styles.indicatorWrapper}>
        <Text style={styles.indicatorText}>
          {`${currentIndex}/${allSize}`}
        </Text>
      </View>;
  }

  return props.visible ?
    <Modal
      visible={props.visible}
      transparent
    >
      <StatusBar backgroundColor="white" style="auto" />
      <ImageViewer
        imageUrls={props.images}
        index={props.selectedImageIndex}
        renderHeader={renderHeader}
        renderIndicator={renderIndicator}
        enableSwipeDown
        onSwipeDown={props.onClose}
        saveToLocalByLongPress={false}
      />
    </Modal> :
    <></>;
}
