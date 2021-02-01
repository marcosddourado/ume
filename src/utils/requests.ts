import axios from "axios";
import _ from "lodash";
import verifyConnection from "./verifyConnection";
import { STATE_CITIES } from "./constants";
import Toast from "../components/Toast/Toast";

// RETORNA AS CIDADE DE UM ESTADO(NECESSÁRIO ID DO ESTADO)
export async function getCities(stateId: number) {
  let cities = [];

  try {
    const hasConnection = await verifyConnection();
    if (hasConnection) {
      const { data } = await axios.get(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${stateId}/municipios`
      );

      cities = _.map(data, ({ id, nome }) => ({
        value: id,
        label: nome,
        name: nome
      }));
    } else {
      cities = STATE_CITIES[String(stateId)];
    }
  } catch (e) {
    console.log("getCities error", e);
    Toast.show("Erro ao buscar cidades. Tente novamente!");
  }

  return cities;
}
