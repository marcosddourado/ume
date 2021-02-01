import React, { useMemo, useState } from "react";
import {
  Image,
  ImageResizeMode,
  ImageStyle,
  LayoutChangeEvent,
  StyleSheet,
  View,
  StyleProp,
  Dimensions as ScreenDimensions
} from "react-native";
import sendErrorToSentry from "../../utils/sendErrorToSentry";

interface ResponsiveImageProps {
  uri: string;
  resizeMode?: ImageResizeMode;
  style?: StyleProp<ImageStyle>;
}

interface Dimensions {
  width: number;
  height: number;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = (props: ResponsiveImageProps) => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 1, height: 1 });
  const _onViewLayoutChange = async (event: LayoutChangeEvent) => {
    const { width, height } = await getImageSize(props.uri);
    setDimensions({ width, height });
  };

  const getImageSize = (uri: string): Promise<Dimensions> => new Promise(
    (resolve, reject) => {
      try {
        Image.getSize(uri, (width, height) => resolve({ width, height }));
      } catch (error) {
        sendErrorToSentry(error);
        // eslint-disable-next-line prefer-promise-reject-errors
        reject({ width: 1, height: 1 });
      }
    }
  );

  const aspectRatio = useMemo(() => {
    const ratio = dimensions.width / dimensions.height;
    return ratio;
  }, [dimensions]);

  const { height: windowHeight } = ScreenDimensions.get("window");
  return (
    <View style={styles.container} onLayout={_onViewLayoutChange}>
      <Image
        source={{ uri: props.uri }}
        style={[
          props.style,
          { aspectRatio, maxHeight: windowHeight * 0.6 }
        ]}
        resizeMode={props.resizeMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { width: "100%", alignItems: "center" }
});

export default ResponsiveImage;
