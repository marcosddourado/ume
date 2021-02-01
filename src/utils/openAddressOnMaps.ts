import { Linking } from "expo";

export default function openAddressOnMaps(address: string) {
  Linking.openURL(`http://maps.google.com/?daddr=${address}`);
}
