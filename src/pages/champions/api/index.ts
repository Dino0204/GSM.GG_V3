import { API } from "../../../app/types/api";
import { RIOT_API, DDRAGON, VER, KR, AS } from "../../../app/consts/env";

/** 모든 챔피언 정보 획득 */
export const getChampData = async () => {
  const res = await API<any>(`${DDRAGON}/${VER}/data/ko_KR/champion.json`, {
    method: "GET",
  });
  return res;
};

/** 챔피언 프로필 이미지 취득 */
export const getChampProfile = (champ_id: string) => {
  return `${DDRAGON}/${VER}/img/champion/${champ_id}.png`;
};
