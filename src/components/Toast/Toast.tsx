import { WToast } from "react-native-smart-tip";
import { Keyboard } from "react-native";

function show(message: string): void {
  Keyboard.dismiss();
  WToast.show({
    data: message,
    duration: WToast.duration.LONG,
    backgroundColor: "rgb(150, 150, 150)"
  });
}

export default { show };
