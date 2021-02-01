import { firebaseConfig } from "../config/firebaseConfig";

export default function appIsUsingProductionData() {
  return firebaseConfig.projectId === "fishingtrips-23c8e";
}
