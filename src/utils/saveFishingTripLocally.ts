import moment from "moment";
import _ from "lodash";
import { FishingListData, UserEditData } from "../interfaces";
import { retrieveAllFrom, storeCollection } from "../config/localStorage";

export default async function saveFishingTripLocally(
  fishingTrip: FishingListData,
  isEditing: boolean,
  user: UserEditData
) {
  fishingTrip.hasToUpdateOnDB = true;
  fishingTrip.wasBeingCreated = !isEditing;
  fishingTrip.wasBeingUpdated = !!isEditing;
  fishingTrip.created_at = isEditing
    ? fishingTrip.created_at
    : moment().valueOf();

  let fishingTrips: any = await retrieveAllFrom("fishingTrips");
  fishingTrips = _.chain(fishingTrips)
    .uniqBy("id")
    .keyBy("id")
    .cloneDeep()
    .valueOf();

  // se a ft estiver sendo criada não tem id, cria-se um temporário
  // aqui, na api a função de criar ft atualiza o id.
  if (fishingTrip.wasBeingCreated && !fishingTrip.id) {
    fishingTrip.id = String(moment().valueOf());
  }
  fishingTrip.userInfo = user;

  fishingTrips[fishingTrip.id] = fishingTrip;
  await storeCollection("fishingTrips", _.map(fishingTrips));
}
