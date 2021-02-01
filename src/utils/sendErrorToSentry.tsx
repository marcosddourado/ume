import * as Sentry from "@sentry/react-native";
import Constants from "expo-constants";

export default function sendErrorToSentry(error: any) {
  if (!__DEV__) {
    Sentry.captureException(`error: ${JSON.stringify(error)}\n 
`);
  }
}
