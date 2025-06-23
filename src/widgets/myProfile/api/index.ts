import { AS, DDRAGON, KR, RIOT_API, VER } from "../../../app/consts/env";
import { API } from "../../../app/types/api";

interface MatchProps {
	puuid: string;
	start: number;
	count: number;
}

/** 매치 정보 취득 */
export const getMatchId = async ({ puuid, start, count }: MatchProps) => {
	const res = await API<any>(
		`${AS}/lol/match/v5/matches/by-puuid/${puuid}/ids?start=${start}&count=${count}&api_key=${RIOT_API}`,
		{
			method: "GET",
		},
	);
	return res;
};

/** 매치 상세 정보 취득 */
export const getMatchData = async (id: string) => {
	const res = await API<any>(
		`${AS}/lol/match/v5/matches/${id}?api_key=${RIOT_API}`,
		{
			method: "GET",
		},
	);
	return res;
};

/** 아이템 이미지 취득 */
export const getItem = (id: number): string => {
	return `${DDRAGON}/${VER}/img/item/${id}.png`;
};

export const getUserData = async () => {
	const res = await API<any>(`http://localhost:8081/users/${1}`, {
		method: "GET",
	});
	return res;
};

/** 계정 정보 취득 */
export const getAccountData = async (game_name: string, tag_line: string) => {
	const res = await API<any>(
		`${AS}/riot/account/v1/accounts/by-riot-id/${game_name}/${tag_line}?api_key=${RIOT_API}`,
		{
			method: "GET",
		},
	);
	return res;
};

/** 계정 상세 정보 취득 */
export const getUserDetail = async (puuid: string) => {
	const res = await API<any>(
		`${KR}/lol/summoner/v4/summoners/by-puuid/${puuid}?api_key=${RIOT_API}`,
		{
			method: "GET",
		},
	);
	return res;
};

/** 계정 티어 취득 */
export const getUserTier = async (id: string) => {
	const res = await API<any>(
		`${KR}/lol/league/v4/entries/by-summoner/${id}?api_key=${RIOT_API}`,
		{
			method: "GET",
		},
	);
	return res;
};

/** 계정 프로필 이미지 취득 */
export const getUserProfile = (id: number) => {
	return `https://ddragon.leagueoflegends.com/cdn/15.3.1/img/profileicon/${id}.png`;
};
