import { instance } from "@/shared/api/instance";
import type { ChampData } from "../model";

/** 모든 챔피언 정보 획득 */
export const getChampData = async () => {
	const res = await instance.get<ChampData>(
		`/ddragon-api/${import.meta.env.VITE_DDRAGON_VER}/data/ko_KR/champion.json`,
	);
	return res.data;
};

/** 챔피언 프로필 이미지 취득 */
export const getChampProfile = (champ_id: string): string => {
	return `/ddragon-api/${
		import.meta.env.VITE_DDRAGON_VER
	}/img/champion/${champ_id}.png`;
};
