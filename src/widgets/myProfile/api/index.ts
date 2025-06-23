import { instance } from "@/shared/api/instance";

interface MatchProps {
	puuid: string;
	start: number;
	count: number;
}

/** 매치 정보 취득 */
export const getMatchId = async ({ puuid, start, count }: MatchProps) => {
	const res = await instance(
		`/as-riot-api/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}`,
	);
	return res;
};

/** 매치 상세 정보 취득 */
export const getMatchData = async (id: string) => {
	const res = await instance(`/as-riot-api/lol/match/v5/matches/${id}`, {
		method: "GET",
	});
	return res;
};

/** 아이템 이미지 취득 */
export const getItem = (id: number): string => {
	return `/ddragon-api/${import.meta.env.VITE_DDRAGON_VER}/img/item/${id}.png`;
};

export const getUserData = async () => {
	const res = await instance(`http://localhost:8081/users/${1}`, {
		method: "GET",
	});
	return res;
};

/** 계정 정보 취득 */
export const getAccountData = async (game_name: string, tag_line: string) => {
	const res = await instance(
		`/as-riot-api/riot/account/v1/accounts/by-riot-id/${game_name}/${tag_line}`,
	);
	return res;
};

/** 계정 상세 정보 취득 */
export const getUserDetail = async (puuid: string) => {
	const res = await instance(
		`/kr-riot-api/lol/summoner/v4/summoners/by-puuid/${puuid}`,
	);
	return res;
};

/** 계정 티어 취득 */
export const getUserTier = async (id: string) => {
	const res = await instance(
		`/kr-riot-api/lol/league/v4/entries/by-summoner/${id}`,
	);
	return res;
};

/** 계정 프로필 이미지 취득 */
export const getUserProfile = (id: number) => {
	return `https://ddragon.leagueoflegends.com/cdn/15.3.1/img/profileicon/${id}.png`;
};
