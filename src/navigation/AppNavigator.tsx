import React from "react";
import { View, Image } from "react-native";
import {
  Scene,
  Router,
  Stack,
  Tabs
} from "react-native-router-flux";
import Login from "../modules/login/screens/login";
import ForgotPassword from "../modules/login/screens/forgot_password";
import withKeyboarScrollable from "../hoc/withKeyboarScrollable";
import withKeyboardDismiss from "../hoc/withKeyboardDismiss";
import { MAIN_COLOR } from "../utils/colors";
import TabIcon from "../components/TabIcon/TabIcon";
import { scale } from "../utils/scales";
import Shopping from "../modules/shopping";
import Home from "../modules/home";
import Partners from "../modules/partners";
import { NavStyles } from "./DefaultHeaderProps";

export default function AppNavigator() {
  const [initialScreen] = React.useState("login");

  function renderLeftButton(): React.ReactElement<any, any> {
    return <View style={{ padding: scale(10) }}>
      <Image
        style={{ height: "100%", aspectRatio: 1 }}
        source={require("../../assets/icon.png")}
      />
    </View>;
  }

  return (
    <Router>
      <Stack key="root">
        <Scene
          initial={initialScreen === "login"}
          hideNavBar
          headerLayoutPreset="center"
          key="login"
          component={withKeyboardDismiss(Login)}
        />
        <Scene
          key="forgot_password"
          hideNavBar
          headerLayoutPreset="center"
          component={withKeyboarScrollable(ForgotPassword)}
        />
        <Stack key="drawer" hideNavBar>
          <Tabs
            key="dashboard"
            initial
            hideNavBar
            drawerLockMode="locked-closed"
            activeTintColor={MAIN_COLOR}
            default="tab1"
            tabBarStyle={{
              height: scale(50),
              paddingTop: scale(2)
            }}
          >
            <Scene
              hideDrawerButton
              key="home"
              title="home"
              tabBarLabel="Home"
              icon={TabIcon}
              name="home"
              nameOutlined="home-outline"
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
              initial
              renderLeftButton={renderLeftButton}
              component={() => <Home />}
            />
            <Scene
              renderLeftButton={renderLeftButton}
              icon={TabIcon}
              name="cart"
              nameOutlined="cart-outline"
              key="shopping"
              tabBarLabel="Compras"
              component={Shopping}
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
            />
            <Scene
              hideDrawerButton
              tabBarLabel="Parceiros"
              key="sites"
              title="Parceiros"
              icon={TabIcon}
              name="heart"
              nameOutlined="heart-outline"
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
              component={() => <Partners />}
              renderLeftButton={renderLeftButton}
            />
          </Tabs>
        </Stack>
      </Stack>
    </Router>
  );
}
