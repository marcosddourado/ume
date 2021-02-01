import { Share } from "react-native";
import appIsUsingProductionData from "./appIsUsingProductionData";

export default function shareItem(entity: "posts" | "fishingTrips", id: string) {
  const SITE_URL = appIsUsingProductionData() ?
    "https://fishingtripsadmin.com.br/" :
    "https://fishingweb.web.app";
  const message = `Pescaria boa é assim! Confere aí: ${SITE_URL}/deeplinking?entity=${entity}&data=${id}`;
  Share.share({ message });
}
