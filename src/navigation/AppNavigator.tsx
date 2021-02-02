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
import NewPassword from "../modules/login/screens/new_password";
import withKeyboarScrollable from "../hoc/withKeyboarScrollable";
import withKeyboardDismiss from "../hoc/withKeyboardDismiss";
import { MAIN_COLOR } from "../utils/colors";
import TabIcon from "../components/TabIcon/TabIcon";
import { scale } from "../utils/scales";
import Explore from "../modules/fishing/explore";
import AllPublications from "../modules/publications/all";
import AllSites from "../modules/sites/all";
import { NavStyles } from "./DefaultHeaderProps";

export default function AppNavigator() {
  const [initialScreen] = React.useState("login");

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
        <Scene
          key="new_password"
          hideNavBar
          headerLayoutPreset="center"
          component={withKeyboarScrollable(NewPassword)}
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
              key="posts"
              icon={TabIcon}
              name="icon-posts"
              nameOutlined="icon-posts-outline"
              size={19}
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
            >
              <Scene
                initial
                key="all_pubications"
                title="home"
                renderLeftButton={() => <View style={{ padding: scale(10) }}>
                  <Image
                    style={{ height: "100%", aspectRatio: 1 }}
                    source={require("../../assets/icon.png")}
                  />
                </View>}
                component={() => <AllPublications />}
              />
            </Scene>
            <Scene
              initial
              renderLeftButton={() => (
                <View style={{ padding: scale(10) }}>
                  <Image
                    style={{ height: "100%", aspectRatio: 1 }}
                    source={require("../../assets/icon.png")}
                  />
                </View>
              )}
              icon={TabIcon}
              name="icon-fishing"
              nameOutlined="icon-fishing-outline"
              key="explore"
              component={Explore}
              size={24}
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
            />
            <Scene
              hideDrawerButton
              tabBarLabel="Parceiros"
              key="sites"
              title="Parceiros"
              icon={TabIcon}
              name="icon-sites"
              nameOutlined="icon-sites-outline"
              size={19}
              titleStyle={NavStyles.defaultTitle}
              navigationBarStyle={NavStyles.defaultNavHeight}
            >
              <Scene
                initial
                key="all_sites"
                component={() => <AllSites />}
                renderLeftButton={() => <View style={{ padding: scale(10) }}>
                  <Image
                    style={{ height: "100%", aspectRatio: 1 }}
                    source={require("../../assets/icon.png")}
                  />
                </View>}
              />
            </Scene>
          </Tabs>
        </Stack>
      </Stack>
    </Router>
  );
}
