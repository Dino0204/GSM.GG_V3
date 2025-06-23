import { API } from "../../../app/types/api";
import { RIOT_API, DDRAGON, VER, KR, AS } from "../../../app/consts/env";

/** 챔피언 상세 정보 취득 */
export const getChampDetails = async (champ_id: string) => {
  const res = await API<any>(
    `${DDRAGON}/${VER}/data/ko_KR/champion/${champ_id}.json`,
    {
      method: "GET",
    }
  );
  return res;
};

/** 챔피언 로딩 이미지(스킨) 취득 */
export const getChampSkin = (champ_id: string, champ_num: number) => {
  return `${DDRAGON}/img/champion/loading/${champ_id}_${champ_num}.jpg
`;
};
