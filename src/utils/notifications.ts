import * as Permissions from "expo-permissions";
import { Platform } from "react-native";
import * as Notifications from "expo-notifications";
import Toast from "../components/Toast/Toast";

export async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );

  await Notifications.requestPermissionsAsync({
    ios: {
      allowAlert: true,
      allowBadge: true,
      allowSound: true,
      allowAnnouncements: true
    }
  });

  let finalStatus = existingStatus;
  if (existingStatus !== "granted") {
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }
  if (finalStatus !== "granted") {
    Toast.show("Você deve dar permissões de notificações para recebê-las.");
    return;
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MIN,
      sound: "default",
      vibrationPattern: [0, 250, 250, 250]
    });
  }
}
