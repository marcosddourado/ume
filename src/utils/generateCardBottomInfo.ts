import { FishingListData } from "../interfaces";
import { TRANSLATE } from "./translate";

export default function generateCardBottomInfo(item: FishingListData): string {
  return `${item.location} ${"\n"}${
    item.fishingType ? TRANSLATE[item.fishingType] : item.fishingTypeOther
  }${
    item.baitType
      ? `, ${TRANSLATE[item.baitType]}`
      : item.baitTypeOther
        ? `, ${item.baitTypeOther}`
        : ""
  }${
    item.moonPhase
      ? `, Lua ${TRANSLATE[item.moonPhase].toLocaleLowerCase()}`
      : ""
  }`;
}
