import { instance } from "@/shared/api/instance";

/** 챔피언 상세 정보 취득 */
export const getChampDetails = async (champ_id: string) => {
	const res = await instance.get(
		`/ddragon-api/${
			import.meta.env.VITE_DDRAGON_VER
		}/data/ko_KR/champion/${champ_id}.json`,
	);
	return res.data;
};

/** 챔피언 로딩 이미지(스킨) 취득 */
export const getChampSkin = (champ_id: string, champ_num: number) => {
	return `/ddragon-api/img/champion/loading/${champ_id}_${champ_num}.jpg`;
};
