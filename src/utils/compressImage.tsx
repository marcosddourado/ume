import * as ImageManipulator from "expo-image-manipulator";
import sendErrorToSentry from "./sendErrorToSentry";

export default async function compressImage(pickerResult: any) {
  try {
    return await ImageManipulator.manipulateAsync(
      pickerResult.uri,
      [{
        resize: {
          height: pickerResult.height < pickerResult.width ?
            undefined :
            pickerResult.height < 1200 ?
              pickerResult.height :
              1200,
          width: pickerResult.width < pickerResult.height ?
            undefined :
            pickerResult.width < 1200 ?
              pickerResult.width :
              1200
        }
      }],
      { compress: 0.4, format: ImageManipulator.SaveFormat.JPEG }
    );
  } catch (error) {
    console.log("compressImage error", error);
    sendErrorToSentry(error);
  }
}
