import React from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { PortalProvider, WhitePortal } from "react-native-portal";
import {
  LogBox,
  Platform,
  StatusBar,
  StyleSheet,
  View
} from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";

export default class App extends React.Component {
  state = {
    isLoadingComplete: false
  };

  async componentDidMount() {
    LogBox.ignoreAllLogs(true);
  }

  loadResourcesAsync = async () => Promise.all([
    Font.loadAsync({
      OverpassRegular: require("./assets/fonts/Overpass-Regular.ttf"),
      OverpassBlack: require("./assets/fonts/Overpass-Black.ttf"),
      OverpassBlackItalic: require("./assets/fonts/Overpass-BlackItalic.ttf"),
      OverpassBold: require("./assets/fonts/Overpass-Bold.ttf"),
      OverpassBoldItalic: require("./assets/fonts/Overpass-BoldItalic.ttf"),
      OverpassExtraBold: require("./assets/fonts/Overpass-ExtraBold.ttf"),
      OverpassExtraBoldItalic: require("./assets/fonts/Overpass-ExtraBoldItalic.ttf"),
      OverpassExtraLight: require("./assets/fonts/Overpass-ExtraLight.ttf"),
      OverpassExtraLightItalic: require("./assets/fonts/Overpass-ExtraLightItalic.ttf"),
      OverpassItalic: require("./assets/fonts/Overpass-Italic.ttf"),
      OverpassLight: require("./assets/fonts/Overpass-Light.ttf"),
      OverpassLightItalic: require("./assets/fonts/Overpass-LightItalic.ttf"),
      OverpassSemiBold: require("./assets/fonts/Overpass-SemiBold.ttf"),
      OverpassSemiBoldItalic: require("./assets/fonts/Overpass-SemiBoldItalic.ttf"),
      OverpassThin: require("./assets/fonts/Overpass-Thin.ttf"),
      OverpassThinItalic: require("./assets/fonts/Overpass-ThinItalic.ttf")
    })
  ]);

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    const { isLoadingComplete } = this.state;
    if (!isLoadingComplete) {
      return (
        <AppLoading
          // @ts-ignore
          startAsync={this.loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    }
    return (
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <PortalProvider>
          <WhitePortal name="modal" />
          <AppNavigator />
        </PortalProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
